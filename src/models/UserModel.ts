import { firebaseApp } from '../config/fireBaseConfig';

import { getDatabase, ref, set, get, orderByChild, onValue, equalTo } from 'firebase/database';
export class UserModel {
    private static readonly URL = "http://localhost:3000";

    public static readonly DATA_BASE = getDatabase(firebaseApp);

    public static async criarUsuario(
        apelido: string,
        senha: string,
        confirmarSenha: string,
        caminhoFoto: string
    ) {
        if (!apelido || !senha || !confirmarSenha) return { erro: -1 };

        if (senha != confirmarSenha) return { erro: -1 };

        const DATA = await fetch(
            `${this.URL}/api/usuarios`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "apelido": apelido,
                    "senha": senha,
                    "caminhoFoto": caminhoFoto
                })
            }
        );

        const DATA_JSON = await DATA.json();

        if (DATA_JSON["linhasAfetadas"] == -1) return { erro: -1 };

        return DATA_JSON;
    }

    public static async esqueceuAsenha(
        chaveUnica: string,
        senha: string
    ) {
        if (!chaveUnica || !senha) return { erro: -1 };

        const DATA = await fetch(
            `${this.URL}/api/usuario/trocarSenha`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "chaveUnica": chaveUnica,
                    "senha": senha,
                })
            }
        );

        const DATA_JSON = await DATA.json();

        if (DATA_JSON["linhasAfetadas"] == -1) return { erro: -1 };

        return DATA_JSON;
    }

    public static async logarUsuario(
        apelido: string,
        senha: string
    ) {
        if (!apelido) return { erro: -1 };

        const DATA = await fetch(
            `${this.URL}/api/usuario`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "apelido": apelido,
                    "senha": senha
                })
            }
        )

        const DATA_JSON = await DATA.json();

        if (DATA_JSON["codigo"] == 401) return { erro: -1 };

        return DATA_JSON;
    }

    public static async monitorarAlteracoesNoBanco(usuario: string, path: string, callback: (data: any[]) => void) {
        const reference = ref(this.DATA_BASE, path);
    
        onValue(reference, async (snapshot) => {
            if (snapshot) {
                const data = snapshot.val();
                if (data) {
                    const chatKeys = Object.keys(data);
    
                    const getFotoPath = async (apelido: string) => {
                        const apelidoRef = ref(this.DATA_BASE, `apelidos/${apelido}`);
                        const apelidoSnapshot = await get(apelidoRef);
                        const userId = apelidoSnapshot.exists() ? apelidoSnapshot.val() : null;
                    
                        if (userId) {
                            const userRef = ref(this.DATA_BASE, `usuarios/${userId}/caminhoFoto`);
                            const userSnapshot = await get(userRef);
                            if (userSnapshot.exists()) {
                                return userSnapshot.val();
                            }
                        }
                        
                        console.log(`No foto path found for ${apelido}`);
                        return null;
                    };
                    
                    const enhancedData = await Promise.all(chatKeys.map(async (chatKey: string) => {
                        const chat = data[chatKey];
                        const participants = chat.participantes;
                        const participantKeys = Object.keys(participants);
    
                        const participantData = await Promise.all(participantKeys.map(async (participantId: string) => {
                            const caminhoFoto = await getFotoPath(participantId);
                            return { participantId, caminhoFoto };
                        }));
    
                        return { chatKey, ...chat, participantData };
                    }));
    
                    // Filtrando os dados para incluir apenas os chats onde o usuário é participante
                    const filteredData = enhancedData.filter(chat => chat.participantes && chat.participantes[usuario] === true);
    
                    // Chamando o callback com os dados filtrados e melhorados
                    callback(filteredData);
                }
            } else {
                console.log("Snapshot é nulo ou indefinido.");
                // Possíveis ações a serem tomadas se o snapshot for nulo ou indefinido
            }
        }, (error) => {
            console.error("Ocorreu um erro ao monitorar alterações no banco:", error);
            // Possíveis ações a serem tomadas se ocorrer um erro na consulta
        });
    }
    

    public static async adicionarContato(contato: string) {
        if (!contato) return { erro: -1 };

        const AUTH_KEY = localStorage.getItem("auth_key");
        console.log(AUTH_KEY);
        const DATA = await fetch(
            `${this.URL}/api/usuario/chats`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "authKey": `${AUTH_KEY}`,
                    "apelidoParticipante2": contato
                })
            }
        )

        const DATA_JSON = await DATA.json();

        if(DATA_JSON.hasOwnProperty("expired")) return DATA_JSON;

        if (DATA_JSON["linhasAfetadas"] == -1) return { erro: -1 };

        return DATA_JSON;
    }

    public static monitorarMensagensDoChat(chatId: any, callback: any) {
        const chatRef = ref(this.DATA_BASE, `chats/${chatId}/mensagens`);
    
        onValue(chatRef, async (snapshot) => {
            const mensagens: any[] = [];
            const promises: Promise<void>[] = [];
            
            snapshot.forEach((childSnapshot) => {
                const mensagem = {
                    messageId: childSnapshot.key,
                    ...childSnapshot.val()
                };
    
                // Adiciona uma promessa para buscar o caminho da foto do remetente
                promises.push(
                    this.getFotoPath(mensagem.senderId)
                        .then((senderFotoPath) => {
                            // Adiciona o caminho da foto à mensagem
                            mensagem.senderFotoPath = senderFotoPath;
                        })
                        .catch((error) => {
                            console.error("Erro ao buscar caminho da foto:", error);
                        })
                );
    
                mensagens.push(mensagem);
            });
    
            // Espera todas as promessas serem resolvidas antes de chamar o callback
            await Promise.all(promises);
    
            // Chama o callback com as mensagens, incluindo os caminhos das fotos
            callback(mensagens);
        });
    };
    
    private static async getFotoPath(apelido: string) {
        const apelidoRef = ref(this.DATA_BASE, `apelidos/${apelido}`);
        const apelidoSnapshot = await get(apelidoRef);
        const userId = apelidoSnapshot.exists() ? apelidoSnapshot.val() : null;
    
        if (userId) {
            const userRef = ref(this.DATA_BASE, `usuarios/${userId}/caminhoFoto`);
            const userSnapshot = await get(userRef);
            if (userSnapshot.exists()) {
                return userSnapshot.val();
            }
        }
        
        console.log(`No foto path found for ${apelido}`);
        return null;
    }

    public static async enviarMensagem(chat_id: string, mensagem: string)
    {
        const TIMESTAMP = Date.now();
        const AUTH_KEY = localStorage.getItem("auth_key");

        const DATA = await fetch(
            `${this.URL}/api/mensagens`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "authKey": `${AUTH_KEY}`,
                    "chat_id": chat_id,
                    "mensagem": mensagem,
                    "timestamp": TIMESTAMP
                })
            }
        )

        const DATA_JSON = await DATA.json();

        if(DATA_JSON.linhasAfetadas == -1) return { erro: 401}

        return DATA_JSON;
    }
}

import { firebaseApp } from '../config/fireBaseConfig';

import { getDatabase, ref, set, get, orderByChild, onValue, equalTo } from 'firebase/database';
export class UserModel {
    private static readonly URL = "http://localhost:3000";

    public static readonly DATA_BASE = getDatabase(firebaseApp);

    public static async criarUsuario(
        apelido: string,
        senha: string,
        confirmarSenha: string
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
                    "caminhoFoto": "/imagems/profile_1.jpeg"
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

    public static monitorarAlteracoesNoBanco(usuario: string, path: string, callback: (keys: string[], data: any[]) => void) {
        const reference = ref(this.DATA_BASE, path);
    
        // Executando a consulta
        onValue(reference, (snapshot) => {
            if (snapshot) {
                const data = snapshot.val();
                if (data) {
                    // Obtendo as chaves dos chats
                    const chatKeys = Object.keys(data);
                    
                    // Filtrando os resultados pela propriedade 'participantes'
                    const filteredData = Object.values(data).filter((item: any) => item.participantes && item.participantes[usuario] === true);
                    
                    // Chamando o callback com as chaves e os dados filtrados
                    callback(chatKeys, filteredData);
                } else {
                    console.log("Dados do snapshot estão vazios.");
                    // Possíveis ações a serem tomadas se os dados estiverem vazios
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
}

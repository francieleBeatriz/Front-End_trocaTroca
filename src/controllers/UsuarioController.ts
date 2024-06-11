import { UserModel } from "../models/UserModel";

export class UsuarioController 
{
    public static async criarUsuario(
        apelido: string,
        senha: string,
        confirmarSenha: string,
        caminhoFoto: string
    ) 
    {
        const RESPOSTA = await UserModel.criarUsuario(
            apelido,
            senha,
            confirmarSenha,
            caminhoFoto
        );

        if (this.verificaResposta(RESPOSTA)) {
            alert("Por favor, preencha  ou verifique os campos!");
            return RESPOSTA;
        }

        const CHAVE_UNICA = RESPOSTA["chaveUnica"];
        const AUTH_KEY = RESPOSTA["authKey"];

        localStorage.setItem("auth_key", AUTH_KEY);
        localStorage.setItem("usuario", apelido);
        return CHAVE_UNICA;
    }

    public static async logarUsuario(apelido: string, senha: string)
    {
        const RESPOSTA = await UserModel.logarUsuario(apelido, senha);

        if(this.verificaResposta(RESPOSTA)) {
            alert("Por favor, preencha  ou verifique os campos!");
            return RESPOSTA;
        }

        const AUTH_KEY = RESPOSTA["authKey"];
        localStorage.setItem("auth_key", AUTH_KEY);
        localStorage.setItem("usuario", apelido);
        
        return {
            "codigo": 200,
            "mensagem": "Usuário logado com sucesso!"
        };
            
    }

    public static async esqueceuAsenha(
        chaveUnica: string,
        senha: string
    )
    {
        const RESPOSTA = UserModel.esqueceuAsenha(chaveUnica, senha);

        if(this.verificaResposta(RESPOSTA))
        {
            alert("Por favor, preencha  ou verifique os campos!");
            return RESPOSTA;
        }

        return {
            "codigo": 200,
            "mensagem": "A senha foi alterada com sucesso!"
        };
    }

    public static async adicionarContato(apelido: string)
    {
        return await UserModel.adicionarContato(apelido);
    }

    public static iniciarMonitoramento(usuario: string, path: string, callback: (data: any) => void)
    {
        UserModel.monitorarAlteracoesNoBanco(usuario, path, callback);
    }

    private static verificaResposta(resposta: Object)
    {
        return resposta.hasOwnProperty("erro");
    }

    public static monitorarMensagensDoChat(chatId: any, callback: any)
    {
        UserModel.monitorarMensagensDoChat(chatId, callback);
    }

    public static async enviarMensagem(chat_id: string, mensagem: string)
    {

        const RESPOSTA = await UserModel.enviarMensagem(chat_id, mensagem);

        if(RESPOSTA.hasOwnProperty("erro")) {
            alert("Houve um erro ao enviar a mensagem!");
            return -1;
        }

        return RESPOSTA;
    }
}

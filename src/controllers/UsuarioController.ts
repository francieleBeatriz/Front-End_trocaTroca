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
        
        const RESPONSE  = await UserModel.criarUsuario(
            apelido,
            senha,
            confirmarSenha,
            caminhoFoto
        );

        console.log(RESPONSE);
    }
}
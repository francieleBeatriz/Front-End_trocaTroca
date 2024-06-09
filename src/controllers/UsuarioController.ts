import { UserModel } from "../models/UserModel";

export class UsuarioController
{
    public static async criarUsuario(
        apelido: string, 
        senha: string, 
        confirmarSenha: string 
    )
    {
        const RESPONSE  = await UserModel.criarUsuario(
            apelido,
            senha,
            confirmarSenha
        );

        console.log(RESPONSE);
    }
}
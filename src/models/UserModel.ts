export class UserModel
{
    public static async criarUsuario(
        apelido: string,
        senha: string,
        confirmarSenha: string
    )
    {
        if(!apelido || !senha || !confirmarSenha) return {erro: -1};

        if(senha != confirmarSenha) return {erro: -1};

        const DATA = await fetch(
            "https://4be3-201-71-40-38.ngrok-free.app/api/usuarios",
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

        if(DATA_JSON["linhasAfetadas"] == -1) return {erro: -1};

        return DATA_JSON;
    }

    public static async esqueceuAsenha(
        chaveUnica: string,
        senha: string
    )
    {   
        if(!chaveUnica || !senha) return {erro: -1};

        const DATA = await fetch(
            "https://4be3-201-71-40-38.ngrok-free.app/api/usuario/trocarSenha",
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

        if(DATA_JSON["linhasAfetadas"] == -1) return {erro: -1};

        return DATA_JSON;
    }

    public static async logarUsuario(
        apelido: string, 
        senha: string
    )
    {
        if(!apelido) return {erro: -1};

        const DATA = await fetch(
            "https://4be3-201-71-40-38.ngrok-free.app/api/usuario",
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

        if(DATA_JSON["codigo"] == 401) return {erro: -1};

        return DATA_JSON;
    }
}
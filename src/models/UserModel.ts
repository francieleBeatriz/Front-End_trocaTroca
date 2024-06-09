export class UserModel
{
    public static async criarUsuario(
        apelido: string,
        senha: string,
        confirmarSenha: string,
        caminhoFoto: string
    )
    {

        if(!apelido || !senha || !confirmarSenha || !caminhoFoto) return -1;

        if(senha != confirmarSenha) return -1;

        const DATA = await fetch(
            "http://localhost:3000/api/usuarios",
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
        )

        const DATA_JSON = await DATA.json();
        console.log(DATA_JSON);
        return 1;
    }
}
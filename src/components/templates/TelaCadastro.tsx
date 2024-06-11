import { createContext, useState, Dispatch, SetStateAction } from "react";
import Cadastrar from "../organisms/Cadastrar";
import Avatar from "../organisms/Avatar";
import { UsuarioController } from "../../controllers/UsuarioController";
import { useNavigate } from "react-router-dom";

interface TelaCadastroContextType {
    apelido: string;
    setApelido: Dispatch<SetStateAction<string>>;
    senha: string;
    setSenha: Dispatch<SetStateAction<string>>;
    confirmaSenha: string;
    setConfirmaSenha: Dispatch<SetStateAction<string>>;
    caminhoFoto: string;
    setCaminhoFoto: Dispatch<SetStateAction<string>>;
    cadastrarUsuario: () => void;
}

export const TelaCadastroContext = createContext<TelaCadastroContextType>({
    apelido: "", 
    setApelido: () => {}, 
    senha: "", 
    setSenha: () => {}, 
    confirmaSenha: "", 
    setConfirmaSenha: () => {}, 
    caminhoFoto: "", 
    setCaminhoFoto: () => {},
    cadastrarUsuario: () => {}
});

export function TelaCadastro({page}: {page: number})
{
    const navegarPara = useNavigate();

    const [ apelido, setApelido ] = useState<string>("");
    const [ senha, setSenha ] = useState<string>("");
    const [ confirmaSenha, setConfirmaSenha ] = useState<string>("");
    const [ caminhoFoto, setCaminhoFoto ] = useState<string>("");

    const cadastrarUsuario = async () => { 
        try {
            console.log(caminhoFoto);
            const response: any = await UsuarioController.criarUsuario( // Altere any para o tipo correto do retorno
                apelido,
                senha,
                confirmaSenha,
                caminhoFoto
            );
            console.log(response);
            if (response.hasOwnProperty("erro")) {
                navegarPara("/cadastrar");
                return;
            }

            alert("Usuário cadastrado com sucesso!");

            const CHAVE_UNICA = response; // Altere CHAVE_UNICA para o nome correto da chave
            navegarPara(`/chaveUnica/${CHAVE_UNICA}`);
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
        }
    }

    return (
        <TelaCadastroContext.Provider 
        value={{
            apelido, 
            setApelido, 
            senha, 
            setSenha, 
            confirmaSenha, 
            setConfirmaSenha, 
            caminhoFoto, 
            setCaminhoFoto,
            cadastrarUsuario
        }}>
            {page == 1 && <Cadastrar></Cadastrar>}
            {page == 2 && <Avatar></Avatar>}
        </TelaCadastroContext.Provider>
    );
}
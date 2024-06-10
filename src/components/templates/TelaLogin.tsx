import { createContext, useState, Dispatch, SetStateAction } from "react";
import Login from "../organisms/Login";
import EsqueceuSenha from "../organisms/EsqueceuSenha";
import { UsuarioController } from "../../controllers/UsuarioController";
import { useNavigate } from "react-router-dom";

interface TelaLoginContextType {
    apelido: string;
    setApelido: Dispatch<SetStateAction<string>>;
    senha: string;
    setSenha: Dispatch<SetStateAction<string>>;
    chaveUnica: string;
    setChaveUnica: Dispatch<SetStateAction<string>>;
    senhaEsqueceu: string;
    setSenhaEsqueceu: Dispatch<SetStateAction<string>>;
    logarUsuario: () => void;
    esqueceuAsenha: () => void;
}

export const TelaLoginContext = createContext<TelaLoginContextType>({
    apelido: "", 
    setApelido: () => {}, 
    senha: "", 
    setSenha: () => {},
    chaveUnica: "",
    setChaveUnica: () => {},
    senhaEsqueceu: "",
    setSenhaEsqueceu: () => {},
    logarUsuario: () => {},
    esqueceuAsenha: () => {}
});

export function TelaLogin({page} : {page: number})
{
    const [ apelido, setApelido ] = useState<string>("");
    const [ senha, setSenha ] = useState<string>("");
    const [ chaveUnica, setChaveUnica ] = useState<string>("");
    const [ senhaEsqueceu, setSenhaEsqueceu ] = useState<string>("");

    const navegarPara = useNavigate();

    const logarUsuario = async () => {
        const resposta = await UsuarioController.logarUsuario(
            apelido, senha
        );

        if (resposta.hasOwnProperty("erro")) {
            navegarPara("/login");
            return;
        }

        alert(resposta.mensagem);
        navegarPara("/chatLista");
    }

    const esqueceuAsenha = async () => {
        const resposta = await UsuarioController.esqueceuAsenha(
            chaveUnica, senhaEsqueceu
        );

        if (resposta.hasOwnProperty("erro")) {
            navegarPara("/esqueceuAsenha");
            return;
        }

        alert(resposta.mensagem);
        navegarPara("/login");
    }

    return(
        <TelaLoginContext.Provider 
        value={{ 
            apelido, 
            setApelido, 
            senha, 
            setSenha,
            chaveUnica,
            setChaveUnica,
            senhaEsqueceu,
            setSenhaEsqueceu,
            logarUsuario,
            esqueceuAsenha
        }}>
            { page == 1 && <Login></Login> }
            { page == 2 && <EsqueceuSenha></EsqueceuSenha> }
        </TelaLoginContext.Provider>
    );
}
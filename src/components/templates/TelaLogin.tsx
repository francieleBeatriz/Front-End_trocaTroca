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
    logarUsuario: () => void;
}

export const TelaLoginContext = createContext<TelaLoginContextType>({
    apelido: "", 
    setApelido: () => {}, 
    senha: "", 
    setSenha: () => {},
    logarUsuario: () => {}
});

export function TelaLogin({page} : {page: number})
{
    const [ apelido, setApelido ] = useState<string>("");
    const [ senha, setSenha ] = useState<string>("");

    const navegarPara = useNavigate();

    const logarUsuario = async () => {
        const resposta = await UsuarioController.logarUsuario(
            apelido, senha
        );

        if (resposta.hasOwnProperty("erro")) {
            navegarPara("/login");
            return;
        }

        navegarPara("/chatlista");
    }

    return(
        <TelaLoginContext.Provider 
        value={{ 
            apelido, 
            setApelido, 
            senha, 
            setSenha, 
            logarUsuario
        }}>
            { page == 1 && <Login></Login> }
            { page == 2 && <EsqueceuSenha></EsqueceuSenha> }
        </TelaLoginContext.Provider>
    );
}
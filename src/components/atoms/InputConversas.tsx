import React from 'react';
import { StyledInputConversas } from '../../assets/styles/PaginaConversa';
import iconeEnviar from '../../assets/images/iconeEnviar.svg';

const InputConversas = () => {
    return (
        <StyledInputConversas>
            <input type="text" placeholder="Digite sua mensagem..."/>
            <button>
                <img src={iconeEnviar} alt="" />
            </button>
        </StyledInputConversas>
    );
}

export default InputConversas;
 
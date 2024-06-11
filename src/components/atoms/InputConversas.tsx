// InputConversas.tsx
import React from 'react';
import { StyledInputConversas } from '../../assets/styles/PaginaConversa';
import iconeEnviar from '../../assets/images/iconeEnviar.svg';

interface InputConversasProps {
    value?: string; // Adiciona a propriedade value do tipo string
    onChange: (text: string) => void;
    onClick: () => void;
}

const InputConversas: React.FC<InputConversasProps> = ({ value, onChange, onClick }) => {
    return (
        <StyledInputConversas>
            {/* Usa o valor passado como propriedade value para inicializar o input */}
            <input type="text" placeholder="Digite sua mensagem..." value={value} onChange={(e) => onChange(e.target.value)} />
            <button onClick={onClick}>
                <img src={iconeEnviar} alt="" />
            </button>
        </StyledInputConversas>
    );
}

export default InputConversas;

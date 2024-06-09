import React from 'react';
import { StyledBotao } from '../../assets/styles/StyledComponents';

interface TextoBotaoProps {
    textoBotao?: string;
    imgBotao?: string;
    reverse?: boolean;
    onClick?: () => void;
}

const Botao: React.FC<TextoBotaoProps> = ({ textoBotao, imgBotao, reverse, onClick }) => {
    return (
        <StyledBotao reverse={reverse}>
            {textoBotao} 
            {imgBotao && 
                <img src={imgBotao} alt="Ícone do Botão" onClick={() => onClick()}/>
            } 
        </StyledBotao>
    );
}

export default Botao;

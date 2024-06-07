import React from 'react';
import { StyledBotao } from '../../assets/styles/StyledComponents'

interface TextoBotaoProps {
    textoBotao: string;
    imgBotao: string;
}

const Botao: React.FC<TextoBotaoProps> = ({ textoBotao, imgBotao }) => {
    return (
        <StyledBotao>
            {textoBotao} <img src={imgBotao} alt="Ícone do Botão" />
        </StyledBotao>
    );
}

export default Botao;

import React from 'react';
import { StyledBotao } from '../../assets/styles/StyledComponents'

interface TextoBotaoProps {
    textoBotao: string;
    imgBotao: string;
    onClick: () => void;
}

const Botao: React.FC<TextoBotaoProps> = ({ textoBotao, imgBotao, onClick }) => {
    return (
        <StyledBotao>
            {textoBotao} <img src={imgBotao} alt="Ícone do Botão" onClick={() => onClick()}/>
        </StyledBotao>
    );
}

export default Botao;

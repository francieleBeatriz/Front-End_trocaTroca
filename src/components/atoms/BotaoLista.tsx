import React from 'react';

interface TextoBotaoProps {
    textoBotao?: string;
    imgBotao?: string;
    reverse?: boolean;
    onClick?: () => void;
    cor?: string;
}

const BotaoLista: React.FC<TextoBotaoProps> = ({ textoBotao, imgBotao, reverse, onClick, cor }) => {
    return (
        <button style={{ display: "flex", color: cor,  backgroundColor: 'transparent', border: 'none', fontSize: '18px'}} onClick={onClick}>
            {reverse && imgBotao && <img src={imgBotao} alt="Ícone do Botão" />}
            {textoBotao}
            {!reverse && imgBotao && <img src={imgBotao} alt="Ícone do Botão" />}
        </button>
    );
}
export default BotaoLista;

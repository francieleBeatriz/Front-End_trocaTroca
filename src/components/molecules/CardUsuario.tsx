import React, { Component } from 'react';
import { StyledCardUsuario } from '../../assets/styles/PaginaConversa';
import { StyledCardMensagem } from '../../assets/styles/PaginaConversa';
import { StyledRodapeUsuario } from '../../assets/styles/PaginaConversa';

interface CardUsuarioProps {
    mensagem: string;
    usuario: string;
    timestamp: string;
    caminhoFoto: string;
  }
  
export const CardUsuario: React.FC<CardUsuarioProps> = ({ usuario, caminhoFoto, mensagem, timestamp }) => {
return (
    <StyledCardUsuario>
    <StyledCardMensagem>
        <p>
            {usuario}
        </p>
        <div>
        {mensagem}
        </div>
    </StyledCardMensagem>
    <StyledRodapeUsuario>
        <p>{timestamp}</p>
        <img src={caminhoFoto}></img>
    </StyledRodapeUsuario>
    </StyledCardUsuario>
);
};
  


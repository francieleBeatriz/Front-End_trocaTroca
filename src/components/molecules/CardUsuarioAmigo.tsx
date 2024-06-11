import React, { Component } from 'react';
import { StyledCardUsuarioAmigo } from '../../assets/styles/PaginaConversa';
import { StyledCardMensagemAmigo } from '../../assets/styles/PaginaConversa';
import { StyledRodapeUsuarioAmigo } from '../../assets/styles/PaginaConversa';

interface CardUsuarioAmigoProps {
  mensagem: string;
  usuario: string;
  timestamp: string;
  caminhoFoto: string;
}

export const CardUsuarioAmigo: React.FC<CardUsuarioAmigoProps> = ({ usuario, caminhoFoto, mensagem, timestamp }) => {
{
      return (
        <StyledCardUsuarioAmigo>
            <StyledCardMensagemAmigo>
                <p>{usuario}</p>
                <div> 
                  {mensagem}
                </div>
            </StyledCardMensagemAmigo>
            <StyledRodapeUsuarioAmigo>
                <img src={caminhoFoto}></img>
                <p>{timestamp}</p>
            </StyledRodapeUsuarioAmigo>
        </StyledCardUsuarioAmigo>
      );
    }
};

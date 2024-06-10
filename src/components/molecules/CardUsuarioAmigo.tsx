import React, { Component } from 'react';
import { StyledCardUsuarioAmigo } from '../../assets/styles/PaginaConversa';
import { StyledCardMensagemAmigo } from '../../assets/styles/PaginaConversa';
import { StyledRodapeUsuarioAmigo } from '../../assets/styles/PaginaConversa';

export class CardUsuarioAmigo extends Component
{
    render(){  
      return (
        <StyledCardUsuarioAmigo>
            <StyledCardMensagemAmigo>
                <p>Outro Usuário</p>
                <div> 
                  HAHAHAHAHAHHA
                </div>
            </StyledCardMensagemAmigo>
            <StyledRodapeUsuarioAmigo>
                <div>
                </div>
                <p>Horas:Segundos - Dia Mês Ano
                </p>
            </StyledRodapeUsuarioAmigo>
        </StyledCardUsuarioAmigo>
      );
    }
};

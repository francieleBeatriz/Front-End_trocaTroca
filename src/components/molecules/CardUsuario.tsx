import React, { Component } from 'react';
import { StyledCardUsuario } from '../../assets/styles/PaginaConversa';
import { StyledCardMensagem } from '../../assets/styles/PaginaConversa';
import { StyledRodapeUsuario } from '../../assets/styles/PaginaConversa';

export class CardUsuario extends Component
{
    render(){  
      return (
        <StyledCardUsuario>
            <StyledCardMensagem>
                <p>Usuário</p>
                <div>   
                    KAKAKKAKAKAKAKKAKAKAKKAKAKAKKAKAKKAKAKKAKAKAKKAKAKAKKAKAKAKAKKAKAKAKKAKA
                </div>
            </StyledCardMensagem>
            <StyledRodapeUsuario>
                <p>Horas:Segundos - Dia Mês Ano
                </p>
                <div>
                </div>
            </StyledRodapeUsuario>
        </StyledCardUsuario>
      );
    }
};

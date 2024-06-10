import React from 'react';
import CabecalhoUsuario from '../atoms/CabecalhoUsuario';
import { StyledContainerConversas } from '../../assets/styles/PaginaConversa';
import InputConversas from '../atoms/InputConversas';
import { CardUsuario } from '../molecules/CardUsuario';
import { CardUsuarioAmigo } from '../molecules/CardUsuarioAmigo';
import { StyledMensagensContainer } from '../../assets/styles/PaginaConversa';
const ChatConversas = () => {
  return (
   <StyledContainerConversas>
        <CabecalhoUsuario/>
        <StyledMensagensContainer>
          <CardUsuarioAmigo/>
          <CardUsuario/>
        </StyledMensagensContainer>
        <InputConversas/>
   </StyledContainerConversas>
  );
}

export default ChatConversas;

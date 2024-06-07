import React, { Component } from 'react';

import Menu from '../molecules/Menu'
import CampoAvatar from '../molecules/CampoAvatar';
import Botao from '../atoms/Botao';
import ImagemAvatar from '../atoms/ImagemAvatar';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import iconeSalvar from '../../assets/images/iconeSalvar.svg';

export class Avatar extends Component 
{
  render() 
  {
    return (
      <StyledFormulario>
        <Menu/>
        <CampoAvatar/> 
        <ImagemAvatar/>
        <Botao textoBotao="SALVAR" imgBotao={iconeSalvar}/>
      </StyledFormulario>
    );
  }
}

export default Avatar;
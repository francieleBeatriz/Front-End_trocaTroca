import React, { Component } from 'react';

import Menu from '../molecules/Menu'

import CampoApelido from '../molecules/CampoApelido';
import CampoSenha from '../molecules/CampoSenha';

import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import Botao from '../atoms/Botao';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import arrowRight2 from '../../assets/images/arrow-right2.svg';

export class Login extends Component 
{
  render() 
  {
    return (
        <StyledFormulario>
        <Menu/>
        <CampoApelido/> 
        <CampoSenha/>
        <LinkRedirecionamento textoLabel="Não possui uma conta? " textoLink="CADASTRE AQUI"/>
        <Botao textoBotao="ENTRAR" imgBotao={arrowRight2}/>
      </StyledFormulario>
    );
  }
}
export default Login;
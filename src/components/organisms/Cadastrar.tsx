import React from 'react';

import Menu from '../molecules/Menu';
import CampoApelido from '../molecules/CampoApelido';
import CampoSenha from '../molecules/CampoSenha';
import CampoConfirmaSenha from '../molecules/CampoConfirmaSenha';
import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import Botao from '../atoms/Botao';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import arrowRight from '../../assets/images/arrow-right.svg';

const Cadastrar = () => {
  return (
    <StyledFormulario>
      <Menu />
      <CampoApelido /> 
      <CampoSenha />
      <CampoConfirmaSenha />
      <LinkRedirecionamento textoLabel="Já possui uma conta? " textoLink="ENTRE AQUI" />
      <Botao textoBotao="AVATAR" imgBotao={arrowRight} />
    </StyledFormulario>
  );
};

export default Cadastrar;

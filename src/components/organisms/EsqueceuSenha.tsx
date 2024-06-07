import React from 'react';

import Menu from '../molecules/Menu';
import CampoChave from '../molecules/CampoChave';
import CampoSenha from '../molecules/CampoSenha';
import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import Botao from '../atoms/Botao';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import arrowRight2 from '../../assets/images/arrow-right2.svg';

const EsqueceuSenha = () => {
  return (
    <StyledFormulario>
      <Menu />
      <CampoChave />
      <CampoSenha />
      <LinkRedirecionamento textoLabel="Faça o login " textoLink="AQUI" />
      <Botao textoBotao="SALVAR" imgBotao={arrowRight2} />
    </StyledFormulario>
  );
};

export default EsqueceuSenha;

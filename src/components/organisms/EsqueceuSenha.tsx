import React, { useContext } from 'react';

import Menu from '../molecules/Menu';
import CampoChave from '../molecules/CampoChave';
import CampoSenha from '../molecules/CampoSenha';
import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import Botao from '../atoms/Botao';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import arrowRight2 from '../../assets/images/arrow-right2.svg';
import { TelaLoginContext } from '../templates/TelaLogin';

const EsqueceuSenha = () => {
  const { setChaveUnica, setSenhaEsqueceu, esqueceuAsenha } = useContext(TelaLoginContext);

  return (
    <StyledFormulario>
      <Menu />
      <CampoChave onChange={setChaveUnica}/>
      <CampoSenha onChange={setSenhaEsqueceu}/>
      <LinkRedirecionamento textoLabel="Faça o login " textoLink="AQUI!" to="/login"/>
      <Botao textoBotao="SALVAR" imgBotao={arrowRight2}  onClick={esqueceuAsenha} reverse/>
    </StyledFormulario>
  );
};

export default EsqueceuSenha;

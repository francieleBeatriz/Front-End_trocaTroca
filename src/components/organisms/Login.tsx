import React, { useContext } from 'react';
import { TelaLoginContext } from '../templates/TelaLogin';

import Menu from '../molecules/Menu';
import CampoApelido from '../molecules/CampoApelido';
import CampoSenha from '../molecules/CampoSenha';

import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import Botao from '../atoms/Botao';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import arrowRight2 from '../../assets/images/arrow-right2.svg';


const Login = () => {
  const { setApelido, setSenha, logarUsuario } = useContext(TelaLoginContext);

  return (
    <StyledFormulario>
      <Menu />
      <CampoApelido onChange={setApelido}/>
      <CampoSenha onChange={setSenha}/>
        <LinkRedirecionamento textoLabel="Não possui uma conta? " textoLink="CADASTRE AQUI" to="/cadastrar"/>
      <Botao textoBotao="ENTRAR" imgBotao={arrowRight2} onClick={logarUsuario} reverse/>
    </StyledFormulario>
  );
};

export default Login;





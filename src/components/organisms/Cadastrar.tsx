import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../molecules/Menu';
import CampoApelido from '../molecules/CampoApelido';
import CampoSenha from '../molecules/CampoSenha';
import CampoConfirmaSenha from '../molecules/CampoConfirmaSenha';
import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import Botao from '../atoms/Botao';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import arrowRight from '../../assets/images/arrow-right.svg';

import { TelaCadastroContext } from '../templates/TelaCadastro';

const Cadastrar = () => {
  const { setApelido, setSenha, setConfirmaSenha } = useContext(TelaCadastroContext);
  const navegarPara = useNavigate();

  return (
    <StyledFormulario>
      <Menu />
      <CampoApelido onChange={setApelido}/> 
      <CampoSenha onChange={setSenha}/>
      <CampoConfirmaSenha onChange={setConfirmaSenha}/>
      <LinkRedirecionamento textoLabel="Já possui uma conta? " textoLink="ENTRE AQUI" to="/login"/>
      <Botao textoBotao="AVATAR" imgBotao={arrowRight} onClick={() => navegarPara("/avatar")}/>
    </StyledFormulario>
  );
};

export default Cadastrar;
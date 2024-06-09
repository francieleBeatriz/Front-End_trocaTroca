import { useState } from 'react';

import Menu from '../molecules/Menu';
import CampoApelido from '../molecules/CampoApelido';
import CampoSenha from '../molecules/CampoSenha';
import CampoConfirmaSenha from '../molecules/CampoConfirmaSenha';
import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import Botao from '../atoms/Botao';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import arrowRight from '../../assets/images/arrow-right.svg';
import { UsuarioController } from '../../controllers/UsuarioController';

const Cadastrar = () => {
  const [ apelido, setApelido ] = useState<string>("");
  const [ senha, setSenha ] = useState<string>("");
  const [ confimaSenha, setConfirmaSenha ] = useState<string>("");
  const [ caminhoFoto, setCaminhoFoto ] = useState<string>("/images/profile_1.jpg");

  const criarUsuario = () => {
    UsuarioController.criarUsuario(apelido, senha, confimaSenha, caminhoFoto)
  }

  return (
    <StyledFormulario>
      <Menu />
      <CampoApelido onChange={setApelido}/> 
      <CampoSenha onChange={setSenha}/>
      <CampoConfirmaSenha onChange={setConfirmaSenha}/>
      <LinkRedirecionamento textoLabel="Já possui uma conta? " textoLink="ENTRE AQUI" to="/login"/>
      <Botao textoBotao="AVATAR" imgBotao={arrowRight} onClick={criarUsuario}/>
    </StyledFormulario>
  );
};

export default Cadastrar;

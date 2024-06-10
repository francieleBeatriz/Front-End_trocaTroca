import { useContext } from 'react';

import Menu from '../molecules/Menu';
import CampoAvatar from '../molecules/CampoAvatar';
import Botao from '../atoms/Botao';
import ImagemAvatar from '../atoms/ImagemAvatar';

import { StyledFormulario } from '../../assets/styles/StyledComponents';

import iconeSalvar from '../../assets/images/iconeSalvar.svg';

import { TelaCadastroContext } from '../templates/TelaCadastro';

const Avatar = () => {
  const { setCaminhoFoto, cadastrarUsuario } = useContext(TelaCadastroContext);

  return (
    <StyledFormulario>
      <Menu />
      <CampoAvatar />
      <ImagemAvatar />
      <Botao 
      textoBotao="SALVAR" 
      imgBotao={iconeSalvar}  
      onClick={cadastrarUsuario} 
      reverse/>
    </StyledFormulario>
  );
}

export default Avatar;

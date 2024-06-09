import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SyledChaveUnicaFormulario } from '../../assets/styles/StyledComponents';
import { StyledDivBotoesChave } from '../../assets/styles/StyledComponents';

import CampoChaveUnica from '../molecules/CampoChaveUnica';
import BotoesChave from '../atoms/BotoesChave';
import InputChave from '../atoms/InputChave';

import IconeOlho from '../../assets/images/iconeOlho.svg';
import IconeCopiar from '../../assets/images/iconeCopiar.svg';
import IconeFechar from '../../assets/images/iconeFechar.svg';

const ChaveUnica = () => {
  const { chaveUnica } = useParams();

  const navigate = useNavigate(); 

  const [ type, setType ] = useState("password");
  const [ text, setText ] = useState("Copiar");

  const handleClose = () => {
    navigate('/chatlista'); 
  };

  const handleTypeInput = () => {
    type == "text" ? setType("password") : setType("text");
  }

  const copyChave = async () => {
    navigator.clipboard.writeText(`${chaveUnica}`).then(() => {
      setText("Copiado!");
      setTimeout(
        () => setText("Copiar"),
        750
      );
    })
    .catch((error) => {
      console.error('Erro ao copiar texto:', error);
    });
  }
  return (
    <SyledChaveUnicaFormulario>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <BotoesChave icone={IconeFechar} onClick={handleClose}/>
      </div>
      <CampoChaveUnica/>
      <StyledDivBotoesChave>
        <BotoesChave 
        texto="Vizualizar chave" 
        icone={IconeOlho} 
        onClick={ handleTypeInput } reverse/>
        <BotoesChave texto={text} icone={IconeCopiar} onClick={copyChave} reverse/>
      </StyledDivBotoesChave>
      <InputChave type={ type } value={ chaveUnica }/>
    </SyledChaveUnicaFormulario>
  );
}

export default ChaveUnica;

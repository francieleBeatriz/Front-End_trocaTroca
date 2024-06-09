import React from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledFormulario } from '../../assets/styles/StyledComponents';
import { StyledDivBotoesChave } from '../../assets/styles/StyledComponents';

import CampoChaveUnica from '../molecules/CampoChaveUnica';
import BotoesChave from '../atoms/BotoesChave';
import InputChave from '../atoms/InputChave';

import IconeOlho from '../../assets/images/iconeOlho.svg';
import IconeCopiar from '../../assets/images/iconeCopiar.svg';
import IconeFechar from '../../assets/images/iconeFechar.svg';

const ChaveUnica = () => {
  const navigate = useNavigate(); 

  const handleClose = () => {
    console.log('Trying to navigate to /chatlist');
    navigate('/chatlista'); 
  };
  return (
    <StyledFormulario>
      <div style={{ marginLeft: '90%', marginTop: '10px' }}>
        <BotoesChave icone={IconeFechar} onClick={handleClose}/>
      </div>
      <CampoChaveUnica/>
      <StyledDivBotoesChave>
        <BotoesChave texto="Vizualizar chave" icone={IconeOlho} reverse/>
        <BotoesChave texto="Copiar" icone={IconeCopiar} reverse/>
      </StyledDivBotoesChave>
      <InputChave type="password"/>
    </StyledFormulario>
  );
}

export default ChaveUnica;

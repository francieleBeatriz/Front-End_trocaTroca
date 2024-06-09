import React from 'react';
import { StyledBotoesChave } from '../../assets/styles/StyledComponents';

interface inverteProps {
    icone?: string;
    texto?: string
    reverse?: boolean;
    onClick?: any;
}
const BotoesChave:React.FC <inverteProps>= ({reverse, icone, texto, onClick}) => {
  return (
    <StyledBotoesChave reverse={reverse} onClick={onClick}>{texto}
        <img src={icone} alt="" />
    </StyledBotoesChave>
  );
}

export default BotoesChave;

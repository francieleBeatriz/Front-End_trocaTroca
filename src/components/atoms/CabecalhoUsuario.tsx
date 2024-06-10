import React from 'react';
import { StyledCabecalhoUsuario } from '../../assets/styles/PaginaConversa';
import setaVoltar from '../../assets/images/setaVoltar.svg';

const CabecalhoUsuario = () => {
    return (
        <StyledCabecalhoUsuario>
            <img src={setaVoltar} alt="icone seta voltar" />
            <p>Nome do Usuário</p>
        </StyledCabecalhoUsuario>
    );
}

export default CabecalhoUsuario;
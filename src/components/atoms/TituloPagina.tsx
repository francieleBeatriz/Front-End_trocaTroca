import React from 'react';
import { StyledTituloPagina } from '../../assets/styles/StyledComponents';

interface TituloPaginaProps {
    textoTitulo: string;
    cor: string;
    underline: boolean;
}

const TituloPagina: React.FC<TituloPaginaProps> = ({ textoTitulo, cor, underline }) => {
    return (
        <StyledTituloPagina color={cor} underline={underline}>
            {textoTitulo}
        </StyledTituloPagina>
    );
}

export default TituloPagina;

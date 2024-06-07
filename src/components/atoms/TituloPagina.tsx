import React from 'react';
import { StyledTituloPagina } from '../../assets/styles/StyledComponents';

interface TituloPaginaProps {
    textoTitulo: string;
}

const TituloPagina: React.FC<TituloPaginaProps> = ({ textoTitulo }) => {
    return (
        <StyledTituloPagina>{textoTitulo}</StyledTituloPagina>
    );
}

export default TituloPagina;

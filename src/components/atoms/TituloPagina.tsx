import React from 'react';
import { StyledTituloPagina } from '../../assets/styles/StyledComponents';

interface TituloPaginaProps {
    textoTitulo: string;
    cor: string;
}

const TituloPagina: React.FC<TituloPaginaProps> = ({ textoTitulo, cor }) => {
    return (
        <StyledTituloPagina style={{ color: cor }}>{textoTitulo}</StyledTituloPagina>
    );
}

export default TituloPagina;

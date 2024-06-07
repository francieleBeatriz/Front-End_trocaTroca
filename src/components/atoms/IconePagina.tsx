import React from 'react';
import { StyledIconePagina } from '../../assets/styles/StyledComponents'

interface IconePaginaProps {
    iconePagina: string;
}

const IconePagina: React.FC<IconePaginaProps> = ({ iconePagina }) => {
    return (
        <StyledIconePagina src={iconePagina} alt="Ícone da página" id="iconePagina" />
    );
}

export default IconePagina;

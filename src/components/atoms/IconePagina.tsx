import React from 'react';
import { StyledIconePagina } from '../../assets/styles/StyledComponents'

interface IconePaginaProps {
    iconePagina: string;
    filter: string;
}

const IconePagina: React.FC<IconePaginaProps> = ({ iconePagina, filter }) => {
    return (
        <StyledIconePagina src={iconePagina} alt="Ícone da página" style={{ filter }}/>
    );
}

export default IconePagina;

import React, { Component } from 'react';
import { StyledTituloPagina } from '../../assets/styles/StyledComponents'

interface TituloPaginaProps {
    textoTitulo: string;
}
class TituloPagina extends Component<TituloPaginaProps>{
    render() {
        return (
                <StyledTituloPagina>{this.props.textoTitulo}</StyledTituloPagina>
        );
    }
}
export default TituloPagina;
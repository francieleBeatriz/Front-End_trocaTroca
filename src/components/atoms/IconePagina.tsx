import React, { Component } from 'react';
import IconeInformacoes from '../../assets/images/pessoaInformacoes.svg'

interface IconePaginaProps {
    iconePagina: string;
}
class IconePagina extends Component<IconePaginaProps>{
    render() {
        return (
                <img src={this.props.iconePagina} alt="icone da pagina" id="iconePagina" />
        );
    }
}
export default IconePagina;
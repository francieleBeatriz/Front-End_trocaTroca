import React, { Component } from 'react';

interface TituloPaginaProps {
    textoTitulo: string;
}
class TituloPagina extends Component<TituloPaginaProps>{
    render() {
        return (
            <div id="menuNavegacao">
                <h1>{this.props.textoTitulo}</h1>
            </div>
        );
    }
}
export default TituloPagina;
import React, { Component } from 'react';
import Logo from '../../assets/images/iconetrocaTroca.svg';

class LogoTrocaTroca extends Component{
    render() {
        return (
            <div id="nome-logo">
                <img src={Logo} alt="Logo da nossa aplicação" id="logo" />
                <h2>trocaTroca</h2>
            </div>
        );
    }
}

export default LogoTrocaTroca;
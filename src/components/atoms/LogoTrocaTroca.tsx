import React, { Component } from 'react';

import Logo from '../../assets/images/iconetrocaTroca.svg';

import {StyledLogoTrocaTroca, StyledTamanhoImg } from '../../assets/styles/StyledComponents';

export class LogoTrocaTroca extends Component{
    render() {
        return (
            <StyledLogoTrocaTroca>
                <StyledTamanhoImg src={Logo} alt="Logo da nossa aplicação" id="logo" />
                <h2>trocaTroca</h2>
            </StyledLogoTrocaTroca>
        );
    }
}

export default LogoTrocaTroca;
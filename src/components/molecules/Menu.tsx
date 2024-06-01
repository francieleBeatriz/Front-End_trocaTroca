import React from 'react';

import TituloPagina from '../atoms/TituloPagina';
import IconePagina from '../atoms/IconePagina';

import IconeInformacoes from '../../assets/images/pessoaInformacoes.svg';

import IconeAvatar from '../../assets/images/iconeAvatar.svg'

export default class App extends React.Component 
{
  render() 
  {
    return (
        <div id="menuNav">
            <div id="navCadastrar">
                <IconePagina iconePagina={IconeInformacoes}/>
                <TituloPagina textoTitulo="CADASTRAR"/>
            </div>
            <div id="navAvatar">
                <IconePagina iconePagina={IconeAvatar}/>
                <TituloPagina textoTitulo="AVATAR"/>
            </div>
        </div>
    );
  }
}
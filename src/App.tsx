import React from 'react';

import './assets/styles/App.css';

import  EsqueceuSenha  from './components/organisms/EsqueceuSenha'

import { LogoTrocaTroca } from './components/atoms/LogoTrocaTroca';

import { StyledBody } from './assets/styles/StyledComponents'

export default class App extends React.Component 
{
  render() 
  {
    return (
      <StyledBody>
        <LogoTrocaTroca/>
        <EsqueceuSenha/>
      </StyledBody>
    );
  }
}
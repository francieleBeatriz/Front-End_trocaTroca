import React from 'react';

import './assets/styles/App.css';

import { Login } from './components/organisms/Login'

import { LogoTrocaTroca } from './components/atoms/LogoTrocaTroca';

import { StyledBody } from './assets/styles/StyledComponents'

export default class App extends React.Component 
{
  render() 
  {
    return (
      <StyledBody>
        <LogoTrocaTroca/>
        <Login/>
      </StyledBody>
    );
  }
}
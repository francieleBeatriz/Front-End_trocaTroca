import React from 'react';
import './assets/styles/App.css';
import './assets/styles/index.css';

import LogoTrocaTroca from './components/atoms/LogoTrocaTroca';

import FormularioCadastro from './components/organisms/FormularioCadastro';


export default class App extends React.Component 
{
  render() 
  {
    return (
      <div>
        <LogoTrocaTroca/>
        <FormularioCadastro/>
      </div>
    );
  }
}
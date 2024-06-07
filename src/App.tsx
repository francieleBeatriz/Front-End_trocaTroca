import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogoTrocaTroca from './components/atoms/LogoTrocaTroca';

import FormularioCadastro from './components/organisms/FormularioCadastro';


export function App()
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider, useAuth } from "./helpers/AuthContext";

import './assets/styles/App.css';
import { StyledBody } from "./assets/styles/StyledComponents";

import LogoTrocaTroca from './components/atoms/LogoTrocaTroca';

import Cadastrar from './components/organisms/Cadastrar';
import Avatar from "./components/organisms/Avatar";
import Login from "./components/organisms/Login";
import EsqueceuSenha from "./components/organisms/EsqueceuSenha";
import ChaveUnica from "./components/organisms/ChaveUnica";

import { ChatScreen } from "./components/templates/ChatScreen";
import { TelaCadastro } from "./components/templates/TelaCadastro";
import { TelaLogin } from "./components/templates/TelaLogin";

export function App()
{
  const auth = useAuth();
  return (
    <StyledBody>
      <LogoTrocaTroca />
      <Router>
          <Routes>
            <Route
              path="/"
              element={localStorage.getItem("auth_key") ? <TelaCadastro page={1}/> : <ChatScreen></ChatScreen>}
            />
            <Route
              path="/cadastrar"
              element={<TelaCadastro page={1}/>}
            />
            <Route
              path="/avatar"
              element={<TelaCadastro page={2}/>}
            />
            <Route 
              path="/login" 
              element={<TelaLogin page={1}/>} 
            />
            <Route 
              path="/esqueceusenha" 
              element={<TelaLogin page={2}/>} 
            />
            <Route 
              path="/chatlista" 
              element={<ChatScreen />} 
            />
            <Route 
              path="/chaveUnica/:chaveUnica" 
              element={localStorage.getItem("auth_key") ? <ChaveUnica /> : <TelaCadastro page={1}/>} 
            />
          </Routes>
      </Router>
    </StyledBody>
  );
} 
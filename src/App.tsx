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
import ChatConversas from "./components/organisms/ChatConversas";

import { ChatScreen } from "./components/templates/ChatScreen";

export function App()
{
  const auth = useAuth();
    return (
      <StyledBody>
        <LogoTrocaTroca />
        <Router>
            <Routes>
              <Route
                path="/cadastrar"
                element={auth.isAuthenticated ? <ChatScreen /> : <Cadastrar />}
              />
              <Route
                path="/avatar"
                element={<Avatar />}
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/esqueceuSenha" 
                element={<EsqueceuSenha />} 
              />
              <Route 
                path="/chatLista" 
                element={<ChatScreen />} 
              />
              <Route 
                path="/chaveUnica" 
                element={<ChaveUnica />} 
              />
              <Route 
                path="/chatConversa" 
                element={<ChatConversas />} 
              />
            </Routes>
        </Router>
      </StyledBody>
    );
} 
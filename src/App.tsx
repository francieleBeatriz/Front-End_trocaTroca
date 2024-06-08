import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider, useAuth } from "./helpers/AuthContext";

import './assets/styles/App.css';
import { StyledBody } from "./assets/styles/StyledComponents";

import LogoTrocaTroca from './components/atoms/LogoTrocaTroca';

import Cadastrar from './components/organisms/Cadastrar';
import Avatar from "./components/organisms/Avatar";
import Login from "./components/organisms/Login";
import EsqueceuSenha from "./components/organisms/EsqueceuSenha";
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
                path="/chats"
                element={<ChatScreen />}
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/esqueceusenha" 
                element={<EsqueceuSenha />} 
              />
            </Routes>
        </Router>
      </StyledBody>
    );
} 
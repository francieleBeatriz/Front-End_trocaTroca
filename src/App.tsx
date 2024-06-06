import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider, useAuth } from "./helpers/AuthContext";

import "./assets/styles/App.css";
import "./assets/styles/index.css";

import LogoTrocaTroca from "./components/atoms/LogoTrocaTroca";
import { ChatScreen } from "./components/templates/ChatScreen";
import { Logout } from "./components/organisms/Logout";
import { Login } from "./components/organisms/Login";
import FormularioCadastro from "./components/organisms/FormularioCadastro";

export function App()
{
  const auth = useAuth();

  return (
    <>
      <LogoTrocaTroca/>
      <Router>
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={auth.isAuthenticated ? <ChatScreen/> : <FormularioCadastro/>}/>
            <Route
              path="/chats"
              element={
                <ChatScreen />
              }
            />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
import { useNavigate } from 'react-router-dom'; // Importe useNavigate corretamente

import { useAuth } from '../../helpers/AuthContext';

function handleLogin(auth: any, navigate: any) {
  const token = 'dummy-token'; // Aqui você colocaria a lógica real de autenticação
  auth.login(token);
  navigate('/');
}

export function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin(auth, navigate)}>Login</button>
    </div>
  );
}

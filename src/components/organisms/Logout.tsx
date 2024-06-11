import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate corretamente
import { useAuth } from '../../helpers/AuthContext';

export function Logout() {
  const NAVIGATE = useNavigate(); // Use navigate sem o prefixo "use"
  const AUTH = useAuth();
  
  useEffect(() => {
    AUTH.logout();
    NAVIGATE('/login');
  }, [AUTH, NAVIGATE]);

  return <div>Logging out...</div>;
}

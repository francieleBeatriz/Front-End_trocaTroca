import { Link } from "react-router-dom";

import { useAuth } from "../../helpers/AuthContext";

export function Home() 
{
    const auth = useAuth(); // Use o hook useAuth diretamente aqui

    return (
        <>
            <h1>Home</h1>
            {auth.isAuthenticated ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
        </>
    );
}

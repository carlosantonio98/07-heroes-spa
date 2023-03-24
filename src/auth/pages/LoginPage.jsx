import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
    
    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogin = () => {
        login( 'Carlos Camacho' );

        navigate('/', {
            replace: true  // colocamos el replace: true para que ya no regresemos al login si ya lo pasamos, le decimos que borre el historial
        });
    }

    return (
        <div className="container mt-5">
            <h1>LoginPage</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>
        </div>
    );
}

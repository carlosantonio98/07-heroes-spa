import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();

    const onLogin = () => {
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

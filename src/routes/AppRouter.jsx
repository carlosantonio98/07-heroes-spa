import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login" element={ <LoginPage /> } />
                
                <Route path="/*" element={
                    <PrivateRoute>   {/* creamos un nuevo componente y dentro de este estamos evaluando si el usuario esta logueado o no, si esta logueado muestra los elementos hijos de este higher orden component. */}
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                
                {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}

            </Routes>
        </>
    )
}
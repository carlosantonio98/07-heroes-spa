import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>

                {/* Public Routes */}
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                

                {/* MANERA 2 DE HACER RUTAS PUBLICAS, ESTO ES BUENO EN CASO DE TENER MAS DE UNA PAGINA PUBLICA
                    <Route path="login/*" element={
                        <PublicRoute>
                            <Routes>
                                <Route path="/*" element={ <LoginPage /> } />
                            </Routes>
                        </PublicRoute>
                    } /> 
                */}

                {/* Private Routes */}
                <Route path="/*" element={
                    <PrivateRoute>   {/* creamos un nuevo componente y dentro de este estamos evaluando si el usuario esta logueado o no, si esta logueado muestra los elementos hijos de este higher orden component. */}
                        <HeroesRoutes />
                    </PrivateRoute>
                } />


                {/* <Route path="login" element={ <LoginPage /> } /> */}
                {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}

            </Routes>
        </>
    )
}
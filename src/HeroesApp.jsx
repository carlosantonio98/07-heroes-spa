import { AuthProvider } from './auth';
import { AppRouter } from './routes/AppRouter';

export const HeroesApp = () => {
    return (
        <AuthProvider>  {/* Nos sirve para compartir información que se encuentra en mi provider en toda la app, en pantallas autenticadas, en pantallas no autenticadas, en todos lados de la app, en cualquier compontente yo tengo acceso a la información del auth provider */}

            <AppRouter />

        </AuthProvider>
    );
}
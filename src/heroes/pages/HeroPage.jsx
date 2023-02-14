import { Navigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers/gerHeroById';

export const HeroPage = () => {
    const { id } = useParams();  // customHook creado por react-router-dom y nos sirve para acceder a los parametros de nuestra url que se almacenan en el Route.provider
    const hero = getHeroesById( id );

    if ( !hero ) {
        return <Navigate to="/marvel" />;  // Navigate es un jsx que podemos regresar en lugar de un <>404 - Not Found</>
    }

    return (
        <>
            <h1>HeroPage</h1>
            <p>{ hero.alter_ego }</p>
        </>
    );
}
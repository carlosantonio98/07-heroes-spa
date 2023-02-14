import { HeroCard } from './';  //componentes arriba y funciones abajo
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';

export const HeroList = ({ publisher }) => {
    
    const heroes = getHeroesByPublisher( publisher ); // No se usa el useState porque la información del json nunca va a cambiar

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {   
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }  // tomamos todas las propiedades de heroe y la expasimos aquí
                    />
                ))
            }
        </div>
    );
}
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';

export const HeroList = ({ publisher }) => {
    
    const heroes = getHeroesByPublisher( publisher ); // No se usa el useState porque la información del json nunca va a cambiar

    return (
        <ul>
            {   
                heroes.map( heroe => (
                    <li key={ heroe.id }>
                        { heroe.superhero }
                    </li>
                ))
            }
        </ul>
    );
}
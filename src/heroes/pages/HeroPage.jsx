import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers/gerHeroById';

export const HeroPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();  // customHook creado por react-router-dom y nos sirve para acceder a los parametros de nuestra url que se almacenan en el Route.provider
    // const hero = getHeroesById( id );  // Es sumamente importate sacar esta variable fuera del funtional component dado el caso en el que si nuestro componente cambiara su estado y este se tuviera que tener que redibujar todos esto de nuevo. La variable se debe de sacar de aquí para no ejecutar la  función cada que este tenga un pequeño cambio, en este proyecto no lo sacaremos debido a que este no modifícara su estado.
    const hero = useMemo( ()=> getHeroesById( id ), [ id ])  // Memorizamos el valor del hero, no cambiara por nada en el mundo a menos de que el id de sus dependencias cambie, menorizamos para que no se redibuje todo el componente y no se vuelva a ejecutar esta función, solo cambiara si el id es modificado

    const onNavigateBack = () => {
        return navigate(-1);  // esto te lleva a la ruta anterior, esto no significa que no podamos hacer una condición mas elaborada
    }




    // Como recomendación debemos de colocar este tipo de condición que retorna un jsx arriba del return padre, esto para seguir una logica en la programación
    if ( !hero ) {
        return <Navigate to="/marvel" />;  // Navigate es un jsx que podemos regresar en lugar de un <>404 - Not Found</>
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `/assets/heroes/${ id }.jpg` }
                    alt={ hero.superhero } 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b> Alter ego: </b> { hero.alter_ego } </li>
                    <li className='list-group-item'> <b> Publisher: </b> { hero.publisher } </li>
                    <li className='list-group-item'> <b> First appearance: </b> { hero.first_appearance } </li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{ hero.characters }</p>

                <button 
                    className='btn btn-outline-primary'
                    onClick={ onNavigateBack }
                >
                    Back
                </button>
            </div>
        </div>
    );
}
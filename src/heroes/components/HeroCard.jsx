import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    /* if ( alter_ego === characters ) return (<></>);
    return <p>{ characters }</p>; */

    return ( alter_ego === characters )
        ? <></>
        : <p>{ characters }</p>;
}

export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;  // se coloco los assets afuera de todo porque cuando agamos el build este se encontrara dentro de la carpeta public

    // const charactersByHero = (<p>{ characters }</p>);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row g-0">
                    
                    <div className="col-4">
                        <img src={ heroImageUrl } className="img-fluid rounded-start" alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">

                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            { 
                                // ( alter_ego !== characters ) && (<p>{ characters }</p>)  // Manera 1
                                // ( alter_ego !== characters ) && charactersByHero         // Manera 2
                            }

                            <CharactersByHero alter_ego={ alter_ego } characters={ characters } /> {/* Manera 3 */}

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                More..
                            </Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

import { Link } from 'react-router-dom';


function CardRazasPerros( { nombreRaza, imagen } ){
    return (
        <li className="breedCard">
            <Link to='/rhodesian'>
                <div className="contenedor-imagen">
                    <img src={ imagen } alt= { nombreRaza } />
                </div>
            </Link>
            <span className="breedTitle">{  nombreRaza } </span> 
        </li>

    );
}

export default CardRazasPerros
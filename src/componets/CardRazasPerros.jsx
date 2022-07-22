import { Link } from 'react-router-dom';


function CardRazasPerros( { nombreRaza, imagen, linkpag } ){
    return (
        <li className="breedCard">
            <Link to= { linkpag }>
                <div className="contenedor-imagen">
                    <img src={ imagen } alt= { nombreRaza } />
                </div>
            </Link>
            <span className="breedTitle">{  nombreRaza } </span> 
        </li>

    );
}

export default CardRazasPerros
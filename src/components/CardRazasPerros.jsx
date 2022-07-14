import {Link} from 'react-router-dom'

function CardRazasPerros ({nombreRaza, imagen}) {
    return (
        <li className="breedCard backGroundBlue">
                 <Link to='/rhodesian'>
                    <div className="contenedorImagen">
                      <img src= {imagen} alt={nombreRaza}/>
                    </div>                                 
                 </Link>   
            <span className="breedTittle" >{nombreRaza}</span> 
        </li>

    )
}

export default CardRazasPerros;
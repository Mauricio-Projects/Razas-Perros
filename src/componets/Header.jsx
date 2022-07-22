import logo from 'media/dog-head-logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <ul className="navbar">
                <li>
                    <Link to='/'>
                    <img className="logo" src= { logo } alt="imagen logo Perro" />
                    </Link>
                </li>
                <li>
                    <button className="button mainButton">Nuevo Post</button>
                </li>
                
                <li>

                    <div className="buscar">
                        <input placeholder="Buscar Una Raza"/>
                        <i className="fas fa-search button iconoBusqueda" ></i>
                    </div>
                </li>

                <li>
                    <button className="button secondaryButton">Login</button>
                </li>
                <li>
                    <button className="button mainButton">Registro</button>
                </li>

            </ul>
        </header>
    )
};
export default Header;
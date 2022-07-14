import logo from 'media/logo2.png';

const Header = () => {
    return (
        <header>
        <ul className="navbar">
            <li>
                <img className="logo" src= {logo} alt="logo pagina"/>
            </li>
            
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            
            <li>
                <div className="buscar" >
                    <input placeholder="buscar una raza" type="text"/>
                    <i className="fas fa-search button iconoBusqueda" ></i>
                </div>
            </li>
            
            <li>
                <button className="button mainButton">Nuevo Post</button>
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
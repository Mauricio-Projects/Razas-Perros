import './styles/Styles.css';
import bordercollie from './media/bordercollie.jpg'
import rhodesian from './media/rhodesian.jpg'
import logo from './media/dog-head-logo.png'



function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
             <li>
                <img className="logo" src= { logo } alt="imagen logo Perro" />
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
    <main>
        <section>
            <h1>Razas Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedor-imagen">
                        <img src={bordercollie} alt="border Collie" />
                    </div>
                    <span className="breedTitle">Border Collie</span> 
                </li>
                <li className="breedCard">
                    <div className="contenedor-imagen">
                        <img src={rhodesian} alt="rhodesian" />
                    </div>
                    <span className="breedTitle">Rodhesian</span>
                </li>
            </ul>
        </section>
        <section></section>
    </main>

    </div>
  );
}

export default App;

import 'styles/Styles.css';
import CardRazasPerros from 'componets/CardRazasPerros';
import bordercollie from 'media/bordercollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import bulldogsIngles from 'media/bulldogsIngles.jpg';
import husky from 'media/husky.jpg';
import rottweiler from 'media/rottweiler.jpg';
import logo from 'media/dog-head-logo.png';



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
            <h1 className='tittle'>Razas Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros nombreRaza= 'Rhodesian' imagen = { rhodesian } />
                <CardRazasPerros nombreRaza= 'BorderCollie' imagen = { bordercollie } />
                <CardRazasPerros nombreRaza= 'Bull Dog Ingles' imagen = { bulldogsIngles } />
                <CardRazasPerros nombreRaza= 'husky' imagen = { husky } />
                <CardRazasPerros nombreRaza= 'rottweiler' imagen = { rottweiler } />
            </ul>
        </section>
        <section></section>
    </main>
    </div>
  );
}


export default App;

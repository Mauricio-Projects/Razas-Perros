import CardRazasPerros from "components/CardRazasPerros";
import Header from "components/Header";

import borderCollie from 'media/bodercollie.jpg'
import bulldog from 'media/bulldogsIngles.jpg'
import husky from 'media/husky.jpg'
import rhodesian from 'media/rhodesian.jpg'
import rottweiler from 'media/rottweiler.jpg'

import logo from 'media/logo2.png';


function Index () {
    return (
        <div>
           
            <Header />
      
    <main>
        <section>
            <h1 className="centrado">Razas de Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros nombreRaza='BorderCollie' imagen={borderCollie} />
                <CardRazasPerros nombreRaza='Husky' imagen={husky} />
                <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
                      
               
                
            </ul>
        </section>
        <section></section>
    </main>
    <footer>

    </footer>
        </div>
    )
}

export default Index;
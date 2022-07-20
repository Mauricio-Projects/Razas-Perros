import 'styles/Styles.css';
import CardRazasPerros from 'componets/CardRazasPerros';
import bordercollie from 'media/bordercollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import bulldogsIngles from 'media/bulldogsIngles.jpg';
import husky from 'media/husky.jpg';
import rottweiler from 'media/rottweiler.jpg';
import Header from 'componets/Header';



function Index() {
    return (
    <div>    
        <div>
        <Header/>
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
  </div>
    ) 
}

export default Index;
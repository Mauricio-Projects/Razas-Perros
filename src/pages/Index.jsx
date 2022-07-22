import 'styles/Styles.css';
import CardRazasPerros from 'componets/CardRazasPerros';
import bordercollie from 'media/bordercollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import bulldogsIngles from 'media/bulldogsIngles.jpg';
import husky from 'media/husky.jpg';
import rottweiler from 'media/rottweiler.jpg';




function Index() {
    return (
         <div> 
                <section>
                    <h1 className='tittle'>Razas Perros</h1>
                    <ul className="breedCardContainer">
                        <CardRazasPerros nombreRaza= 'Rhodesian' imagen = { rhodesian } linkpag='/Rhodesian' />
                        <CardRazasPerros nombreRaza= 'BorderCollie' imagen = { bordercollie } linkpag='/BorderCollie' />
                        <CardRazasPerros nombreRaza= 'Bull Dog Ingles' imagen = { bulldogsIngles } linkpag='/bulldogIngles' />
                        <CardRazasPerros nombreRaza= 'husky' imagen = { husky } linkpag='/husky' />
                        <CardRazasPerros nombreRaza= 'rottweiler' imagen = { rottweiler } linkpag='/rottweiler' />
                    </ul>
                </section>
                <section></section>

        </div>
       
  
    ) 
}

export default Index;
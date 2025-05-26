import { useParams } from 'react-router-dom';
import Nav from './nav';
import Header from './header';
import oppskrifter from './assets/oppskrifter.json';
import Footer from './footer';

function Oppskrift(){
    const { id } = useParams();
    const oppskrift = oppskrifter.find(oppskrift => oppskrift.id === parseInt(id));

    if (!oppskrift) {
        return <h2>Oppskrift ikke funnet</h2>;
    }

    return(
        <>
            <Header/>
            <Nav/>
            <h1>{oppskrift.navn}</h1>
            <p>{oppskrift.beskrivelse}</p>
            <h2>Ingredienser</h2>
            <ul>
                {oppskrift.ingredienser.map((ingrediens, index) => (
                    <li className="ingrediens-list" key={index}>{ingrediens}</li>
                ))}
            </ul>
            <h2>Fremgangsmåte</h2>
            <ol>
                {oppskrift.fremgangsmate.map((trinn, index) => (
                    <li key={index}>{trinn}</li>
                ))}
            </ol>
            <Footer/>
        </>
    )
}

export default Oppskrift;

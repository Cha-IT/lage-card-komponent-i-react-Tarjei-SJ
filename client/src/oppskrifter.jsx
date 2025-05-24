import oppskrifter from "./assets/oppskrifter.json";
import Header from "./header.jsx";
import Nav from "./nav.jsx";
import Card from "./card.jsx";

function Oppskrifter() {
  return (
    <>
      <Header />
      <Nav />
      <h1>Oppskrifter</h1>
      <div className="oppskrifter-list">
        {oppskrifter.map((oppskrift) => (
          <Card
            navn={oppskrift.navn}
            beskrivelse={oppskrift.beskrivelse}
            id={oppskrift.id}
          />
        ))}
      </div>
    </>
  );
}

export default Oppskrifter;
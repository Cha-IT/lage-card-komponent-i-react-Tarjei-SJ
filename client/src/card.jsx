import { Link } from "react-router-dom";


function Card(props) {
  return (
    <div className="card">
      <h2>{props.navn}</h2>
      <p>{props.beskrivelse}</p>
      <Link to={`/oppskrift/${props.id}`}>Se oppskrift</Link>
    </div>
  );
}

export default Card;
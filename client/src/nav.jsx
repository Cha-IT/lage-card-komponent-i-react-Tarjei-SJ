import './nav.css'
import { Link } from 'react-router-dom'
 
function Nav(){
 
    return(
        <>
        <nav>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/oppskrifter">Oppskrifter</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        </>
    )
 
}
export default Nav;
 
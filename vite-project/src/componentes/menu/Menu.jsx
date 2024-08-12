import { Link } from "react-router-dom"
import './Menu.css'
const Menu = () => {
    return(
        <nav className="menu">
            <ul>
                <li> <Link to="/"> Inicio</Link> </li>
                <li> <Link to="/ambos">Accesorios</Link> </li>
                <li> <Link to="/mujeres">Ambos Mujeres</Link> </li>
                <li> <Link to="/hombres">Ambos Hombres</Link> </li>
            </ul>

        </nav>
    )
}

export default Menu;
import './Header.css';
import ambosbahia from '../../assets/carpeta/ambosbahia.png'

function Header() {
    return (
        <header className="header">
            <img className='ambosbahia'   src={ambosbahia} alt="ambosbahia" />
           

        </header>
    )
}

export default Header;
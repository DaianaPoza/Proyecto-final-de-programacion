import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './componentes/header/Header'
import Seccion from './componentes/seccion/Seccion'
import Footer from './componentes/footer/Footer'
import Menu from './componentes/menu/Menu'
import Mujeres from './componentes/mujeres/Mujeres'
import Hombres from './componentes/hombres/Hombres'
import Accesorios from './componentes/ambos/Accesorios'

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element = {<Seccion/>} />
            <Route path="/ambos" element = {<Accesorios/>} />
            <Route path="/mujeres" element = {<Mujeres/>} />
            <Route path="/hombres" element = {<Hombres/>} />

          </Routes>
        </main>
    
        <Footer/>
      </div>
    </Router>
  );
}

export default App
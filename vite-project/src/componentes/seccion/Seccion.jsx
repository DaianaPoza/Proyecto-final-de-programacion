import './Seccion.css';
import Boton from '../boton/Boton';
import Card from 'react-bootstrap/Card';
import CardC from '../card/CardC';
import ambohombre from '../../assets/carpeta/ambohombre.webp';
import CardB from '../card/Card';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import ambouno from '../../assets/carpeta/ambouno.webp';
import ambodos from '../../assets/carpeta/ambodos.webp';
import ambotres from '../../assets/carpeta/ambotres.webp';
import ambocinco from '../../assets/carpeta/ambocinco.webp';
import amboseis from '../../assets/carpeta/amboseis.webp';
import ambosiete from '../../assets/carpeta/ambosiete.webp';
import amboocho from '../../assets/carpeta/amboocho.webp';
import { useState } from 'react';


function Seccion() {
    const [mostrarInformacion, setMostrarInformacion] = useState(false)
    const handleClicEnBotonInformacion = () => {
        setMostrarInformacion(!mostrarInformacion);
    }
    return (
        <section className="seccion">
            <CardC />
            <h2> ¡Envios gratis a partir de 150.000 $!</h2>
            <img src={ambohombre} alt="imagen" />
            <Boton color="pink" texto="Super Ofertas" />


            <button onClick={handleClicEnBotonInformacion}>
                {mostrarInformacion ? 'Ocultar Ofertas' : 'MOSTRAR PRODUCTOS EN OFERTA!!'}
            </button>
            {mostrarInformacion && (
                <div className='informacion-ofertas'>
                    <p>Cofia hojas verdes</p>
                    <p>Cofia bordo lisa</p>
                    <p> Ambo de mujer. Algodon. Estilo mika.  </p>
                    <p> Ambo de hombre. Algodon. Estilo mika. </p>
                </div>
            )}


            <p className='destacados'> Productos destacados</p>
            <div className='contenedorpadre'>
                <div className='contenedorimagen'>
                    <CardB
                        img={ambouno}
                        imgAlt="dos"
                        title="Ambo de mujer. Algodon"
                        text="56.000$"
                        texto="Comprar"
                    />
                    <CardB
                        img={ambodos}
                        imgAlt="dos"
                        title="Ambo de mujer. Algodon. Estilo mika."
                        text="60.000$"
                        texto="Comprar"
                    />
                    <CardB
                        img={ambotres}
                        imgAlt="tres"
                        title="Ambo de mujer. Algodon. Estilo mika."
                        text="62.000$"
                        texto="Comprar"
                    />
                    <CardB
                        img={ambocinco}
                        imgAlt="cinco"
                        title="Ambo de mujer. Algodon."
                        text="52.900.$"
                        texto="Comprar"
                    />
                    <CardB
                        img={amboseis}
                        imgAlt="seis"
                        title="Ambo de mujer. Algodon. Estilo Mika"
                        text="71.000.$"
                        texto="Comprar"
                    />

                    <CardB
                        img={ambosiete}
                        imgAlt="siete"
                        title="Ambo de mujer. Algodon."
                        text="50.800.$"
                        texto="Comprar"
                    />

                    <CardB
                        img={amboocho}
                        imgAlt="ocho"
                        title="Ambo de mujer. Algodon."
                        text="51.000.$"
                        texto="Comprar"
                    />
                </div>
            </div>

        </section>
    )
}

export default Seccion;
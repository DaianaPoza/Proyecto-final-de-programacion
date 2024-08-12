import './Mujeres.css';
import CardB from "../card/Card";
import ambouno from '../../assets/carpeta/ambouno.webp';
import ambodos from '../../assets/carpeta/ambodos.webp';
import ambotres from '../../assets/carpeta/ambotres.webp';
import ambocinco from '../../assets/carpeta/ambocinco.webp';
import amboseis from '../../assets/carpeta/amboseis.webp';
import ambosiete from '../../assets/carpeta/ambosiete.webp';
import amboocho from '../../assets/carpeta/amboocho.webp';
import ambonueve from '../../assets/carpeta/ambonueve.webp';
import ambodiez from '../../assets/carpeta/ambodiez.webp';

function Mujeres() {
    return(
        <div className='contenedorambo'>
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
<CardB
                        img={ambonueve}
                        imgAlt="nueve"
                        title="Ambo de mujer. Algodon. Estilo Mika"
                        text="53.650$"
                        texto="Comprar"
                    />
<CardB
                        img={ambodiez}
                        imgAlt="diez"
                        title="Ambo de mujer. Algodon."
                        text="45.000.$"
                        texto="Comprar"
                    />
        </div>
    )
}
export default Mujeres;
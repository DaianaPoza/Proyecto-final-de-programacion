import './Hombres.css';
import CardB from "../card/Card";
import amboonce from '../../assets/carpeta/amboonce.webp';
import ambodoce from '../../assets/carpeta/ambodoce.webp';
import ambotrece from '../../assets/carpeta/ambotrece.webp';
import ambocatorce from '../../assets/carpeta/ambocatorce.webp';
import amboquince from '../../assets/carpeta/amboquince.webp';
import ambodieciseis from '../../assets/carpeta/ambodieciseis.webp';
import ambodiecisiete from '../../assets/carpeta/ambodiecisiete.webp';
import ambodieciocho from '../../assets/carpeta/ambodieciocho.webp';
import ambodiecinueve from '../../assets/carpeta/ambodiecinueve.webp';
import amboveinte from '../../assets/carpeta/amboveinte.webp';

function Hombres() {
    return (
        <div className='contenedorhombre'>
            <CardB
                img={amboonce}
                imgAlt="once"
                title="Ambo de hombre. Algodon"
                text="56.000$"
                texto="Comprar"
            />
            <CardB
                img={ambodoce}
                imgAlt="doce"
                title="Ambo de hombre. Algodon. Estilo mika."
                text="60.000$"
                texto="Comprar"
            />
            <CardB
                img={ambotrece}
                imgAlt="trece"
                title="Ambo de hombre. Algodon. Estilo mika."
                text="62.000$"
                texto="Comprar"
            />
            <CardB
                img={ambocatorce}
                imgAlt="catorce"
                title="Ambo de hombre. Algodon."
                text="52.900.$"
                texto="Comprar"
            />
            <CardB
                img={amboquince}
                imgAlt="quince"
                title="Ambo de hombre. Algodon. Estilo Mika"
                text="71.000.$"
                texto="Comprar"
            />

            <CardB
                img={ambodieciseis}
                imgAlt="dieciseis"
                title="Ambo de hombre. Algodon."
                text="50.800.$"
                texto="Comprar"
            />

            <CardB
                img={ambodiecisiete}
                imgAlt="diecisiete"
                title="Ambo de hombre. Algodon."
                text="51.000.$"
                texto="Comprar"
            />
            <CardB
                img={ambodieciocho}
                imgAlt="dieciocho"
                title="Ambo de hombre. Algodon. Estilo Mika"
                text="53.650$"
                texto="Comprar"
            />
            <CardB
                img={ambodiecinueve}
                imgAlt="diecinueve"
                title="Ambo de hombre. Algodon."
                text="45.000.$"
                texto="Comprar"
            />
            <CardB
                img={amboveinte}
                imgAlt="veinte"
                title="Ambo de hombre. Algodon."
                text="62.000.$"
                texto="Comprar"
            />
        </div>
    )
}
export default Hombres;
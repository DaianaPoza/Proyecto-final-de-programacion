import CardB from '../card/Card';
import './Accesorios.css'
import cofiauno from '../../assets/carpeta/cofiauno.webp';
import cofiados from '../../assets/carpeta/cofiados.webp';
import cofiatres from '../../assets/carpeta/cofiatres.webp';
import cofiacuatro from '../../assets/carpeta/cofiacuatro.webp';
import cofiasiete from '../../assets/carpeta/cofiasiete.webp';
import cofiaocho from '../../assets/carpeta/cofiaocho.webp';
import pinuno from '../../assets/carpeta/pinuno.webp';
import pindos from '../../assets/carpeta/pindos.webp';
import pintres from '../../assets/carpeta/pintres.webp';
import pincuatro from '../../assets/carpeta/pincuatro.webp';
import pincinco from '../../assets/carpeta/pincinco.webp';
import pinseis from '../../assets/carpeta/pinseis.webp';

function Accesorios() {
    return (
        <div className='accesorios'>
            <div className='section'>
                <h2 className='cofiaypin'> Cofias </h2>
                <div className='images-container'>
                    <CardB
                        img={cofiauno} imgAlt="cofiauno" title="Cofia verde estampada" text="7.000$" texto="Comprar"
                    />
                    <CardB
                        img={cofiados} imgAlt="cofiados" title="Cofia floreada" text="7.000.$" texto="Comprar"
                    />
                    <CardB
                        img={cofiatres} imgAlt="cofiatres" title="Cofia hojas verdes" text="8.000.$" texto="Comprar"
                    />
                    <CardB
                        img={cofiacuatro} imgAlt="cofiacuatro" title="Cofia gris lisa" text="6.000.$" texto="Comprar"
                    />
                    <CardB
                        img={cofiasiete} imgAlt="cofiasiete" title="Cofia blanda lista" text="6.000.$" texto="Comprar"
                    />
                    <CardB
                        img={cofiaocho} imgAlt="cofiaocho" title="Cofia bordo lisa" text="6.000.$" texto="Comprar"
                    />
                </div>

                <div className='section'>
                    <h2 className='cofiaypin'> Pines </h2>
                    <div className='images-container'>
                        <CardB
                            img={pinuno} imgAlt="pinuno" title="Pin estetoscopio" text="5.000.$" texto="Comprar"
                        />
                        <CardB
                            img={pindos} imgAlt="pindos" title="Pin rompecabezas" text="5.600.$" texto="Comprar"
                        />
                        <CardB
                            img={pintres} imgAlt="pintres" title="Pin radiologia" text="5.000.$" texto="Comprar"
                        />
                        <CardB
                            img={pincuatro} imgAlt="pincuatro" title="Pin microscopio" text="6.000.$" texto="Comprar"
                        />
                        <CardB
                            img={pincinco} imgAlt="pincinco" title="Pin mama" text="5.000.$" texto="Comprar"
                        />
                        <CardB
                            img={pinseis} imgAlt="pinseis" title="Nuemonologia" text="5.500.$" texto="Comprar"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accesorios;
import Card from 'react-bootstrap/Card';
import portada from '../../assets/carpeta/portada.webp';
import './CardC.css';


function CardC(props) {
  return (
    <Card className="cardclass">
      <Card.Img className='portadaimg' src={portada} alt="portada" />
      <Card.ImgOverlay>
        <Card.Title className='ambosbahia'>Ambos Bahia</Card.Title>
        <Card.Text>
        9 CUOTAS SIN INTERES
        </Card.Text>
        <Card.Text > Lo que buscas, lo que necesitas </Card.Text>
      </Card.ImgOverlay>
      {props.img}
    </Card>
  );
}

export default CardC;
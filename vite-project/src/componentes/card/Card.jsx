import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';


function CardB(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt={props.imgAlt} style={{ width: '140%', height: 'auto'}}/> 
            <Card.Body className='cardbody'>
                <Card.Title style={{ fontSize: '1.3rem' }}   > {props.title}</Card.Title>
                <Card.Text style={{ fontSize: '1.2rem' }}    >
                    {props.text}
                </Card.Text>
                <Button variant="primary"> {props.texto} </Button>
            </Card.Body>
        </Card>
    );
}

export default CardB;
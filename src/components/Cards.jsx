import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/violao.jpg';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="Violão" />
      <Card.Body>
        <Card.Title>Violão Elétrico Sunburst Memphis AC-60 Nylon Tagima</Card.Title>
        <Card.Text>
        R$ 699,90
        </Card.Text>
        <Button variant="danger">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
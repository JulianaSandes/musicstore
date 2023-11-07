import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import img from "../assets/live-music.png"

function Cabecalho() {
  return (
    <>
      <Navbar bg="secondary" variant="secondary">
        <Container>
          <div className="caixa">
      <span className="navbar-brand">
          <img src={img} alt="Logo" style={{ width: '200px', marginRight: '10px' }} />
      </span>
    </div>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Cabecalho;
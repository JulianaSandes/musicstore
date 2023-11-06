import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
      <Navbar bg="secondary" variant="secondary">
        <Container>
            <h2 class="titulo">MusicStore</h2>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Cabecalho;
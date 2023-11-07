import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import { NavLink } from 'react-bootstrap';

function NavProjeto() {
  return (
    <>
      <Navbar bg="secondary" variant="white">
        <Container className='links'>
        <NavLink className='tituloNav' href="/">MusicStore</NavLink>
          <Nav className="ms-auto">
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
            <Nav.Link href="/Usuario">Usuario</Nav.Link>
            <Nav.Link href="/ProdutoMusica">Produto Musica</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavProjeto;
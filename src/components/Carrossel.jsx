import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/guitarra-acustica-e-teclas-musicais-em-um-plano-de-fundo-branco_169016-16616.jpg?w=1060&t=st=1699278693~exp=1699279293~hmac=9c98d1bffc9b1e298a613dcaa5ae5d479b9a2b4fe86bfe9c2ee5d426a46ecc3e"
          alt="computador1"
        />
        <Carousel.Caption>
          <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;
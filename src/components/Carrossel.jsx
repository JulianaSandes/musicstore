import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://img.freepik.com/fotos-gratis/guitarra-acustica-e-tarola-em-um-fundo-preto-isolado_169016-30365.jpg?w=740&t=st=1699314780~exp=1699315380~hmac=b1db9741c481bf79146056bdb9d4da1044c63930667d4c2cfdc54ff3d756e4f4"
          alt="imagem 1"
        />
        <Carousel.Caption>
          <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://img.freepik.com/fotos-gratis/fundo-de-musica-plana-leiga-com-violao-e-bateria_169016-21132.jpg?w=740&t=st=1699314452~exp=1699315052~hmac=fe6db218bf3375dc69e13ab2aba48f0bb14913b61529ee3c5ea5483f47a61bfe"
          alt="imagem 2"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://img.freepik.com/fotos-gratis/homem-tocando-violao-e-close-up-de-piano-gravando-notas-bela-cor-de-fundo-conceito-de-atividade-musical_169016-4459.jpg?w=826&t=st=1699314501~exp=1699315101~hmac=ccb52867da80580f866e0bf4f75f6a60ab171b54d14d62290bc2a255747f956d"
          alt="imagem 3"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;
import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
import Cabecalho from "../components/Cabecalho";
//import "../App.css";

function Sobre() {
  return (
    <div>
      <Cabecalho />
      <div>
      <NavProjeto />
        <div className="sobre">
        <h1>Sobre a nossa loja</h1>
        </div>
        <div>
          <p className="sobre-p">
          Bem-vindo à MusicStore, o seu destino definitivo para tudo relacionado à música. Localizada no coração da cidade, a MusicStore não é apenas uma loja de instrumentos musicais; é um local onde a música ganha vida. Nossa loja oferece uma ampla variedade de instrumentos musicais, acessórios e conhecimento, criando um ambiente inspirador para músicos de todos os níveis.
          </p>
          <p className="sobre-p">
          Se você é um músico apaixonado, um aspirante a artista ou alguém que simplesmente aprecia os sons que a música pode oferecer, a MusicStore é o lugar onde você pode transformar sua paixão em realidade. Venha visitar a MusicStore e descubra o mundo mágico da música em suas mãos. A música está esperando por você na MusicStore!          </p>
        </div>
    </div>
    </div>
  );
}
export default Sobre;

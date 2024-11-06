import Header from "../../components/Header/Header.jsx";
import ambiente from "../../assets/meio-ambiente.jpg";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import IconCard from "../../components/IconCard/IconCard.jsx";
import DoacaoCard from "../../components/DoacaoCard/DoacaoCard.jsx";
import VolunCadastro from "../../components/VolunCadastro/VolunCadastro.jsx";

function Home() {
  return (
    <>
      <header>
        <Header className="header" />
      </header>
      <main>
        <section className="sectionImg">
          <img src={ambiente} alt="" className="MeioAmbienteImg" />
        </section>
        <section className="icons-container">
          <IconCard title="ONGS" num='50+' />
          <IconCard  title="Voluntarios" num='150+' />
          <IconCard  title="Pontos de Coletas" num='60+' />
        </section>
        <section>
          <div className="containerONGS">
            <h3 className="title">ONGS</h3>
          </div>
          <Carousel />
        </section>
        <section className="pai">
        <div className="containerDoacao">
          <h3 className="title">Doação</h3>
        </div>
        <section className="sectionDoar">
          <DoacaoCard num='R$ 50' />
          <DoacaoCard num='R$ 100'/>
          <DoacaoCard  num='R$ 200+'/>
        </section>
        </section>
      
        <section className="sectionCadas">
          <div className="login-form-container">
            <VolunCadastro />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

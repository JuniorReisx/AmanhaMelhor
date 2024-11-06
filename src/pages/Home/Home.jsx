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
          <IconCard />
          <IconCard />
          <IconCard />
          <IconCard />
        </section>
        <section>
          <div className="containerONGS">
            <h3>ONGS</h3>
          </div>
          <Carousel />
        </section>
        <div className="containerDoacao">
          <h3>Doação</h3>
        </div>
        <section className="sectionDoar">
          <DoacaoCard />
          <DoacaoCard />
          <DoacaoCard />
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

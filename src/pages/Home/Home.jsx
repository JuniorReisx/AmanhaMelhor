import Header from "../../components/Header/Header.jsx";
import ambiente from "../../assets/meio-ambiente.jpg";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel.jsx";

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
        <section>
          <div className="containerONGS">
            <h3>ONGS</h3>
          </div>
          <Carousel />
        </section>
      </main>
    </>
  );
}

export default Home;

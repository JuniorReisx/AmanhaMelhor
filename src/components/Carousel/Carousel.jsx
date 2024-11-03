import './Carousel.css'
import Greenpeace from '../../assets/greenn.jpg'
import wwf from '../../assets/WWF.gif'
import sos from '../../assets/SOSAmazonia.jpg'
import isa from '../../assets/ISA.jpeg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,              // Exibe os pontos de navegação
    infinite: true,          // Loop infinito
    speed: 500,              // Velocidade da transição
    slidesToShow: 2,         // Quantos slides mostrar por vez
    slidesToScroll: 1,       // Quantos slides avançar por vez
    autoplay: true,          // Carrossel automático
    autoplaySpeed: 3000,     // Velocidade de transição do autoplay
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className='containerImgCarousel'>
          <img  className='ImgCarousel' src={Greenpeace} alt="Slide 1" />
        </div>
        <div className='containerImgCarousel'>
          <img className='ImgCarousel'  src={wwf} alt="Slide 2" />
        </div>
        <div className='containerImgCarousel'>
          <img className='ImgCarousel'  src={isa} alt="Slide 3" />
        </div>
        <div className='containerImgCarousel'>
          <img className='ImgCarousel'  src={sos} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

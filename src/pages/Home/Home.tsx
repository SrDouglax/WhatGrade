import "./Home.scss";
import Header from "../../components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import i01 from "../../assets/home/carousel/Carousel01.png";
import { MdCalculate, MdChat, MdOutlineCalendarMonth, MdSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()

  const carouselImages = [
    <img src={i01} alt="imagem do carrossel" />,
    <img src={i01} alt="imagem do carrossel" />,
    <img src={i01} alt="imagem do carrossel" />,
  ];

  return (
    <div className="Home">
      <Header hasLink={false} showHelp={true} />
      <div className="scroll">
        <div className="carousel">
          <Carousel showThumbs={false} showStatus={false} showArrows={true}>
            {carouselImages}
          </Carousel>
        </div>
        <div className="content">
          <div className="about">
            <h2 className="title">Sobre</h2>
            <p className="content">
              Bookshelf é um projeto individual e tem como objetivo ajudar todos os
              vestibulandos ao redor do Brasil a ingressar no tão esperado curso.
            </p>
          </div>
          <div className="featured">
            <h2 className="title">Em destaque</h2>
            <div className="items">
              <a href="/calculadoras" className="calculators" >
                <MdCalculate />
                <p className="text">Calculadoras</p>
              </a>
              <a href="/universidades" className="universities">
                <MdSchool />
                <p className="text">Universidades</p>
              </a>
              <a href="/foruns" className="forums">
                <MdChat />
                <p className="text">Bate-Papos</p>
              </a>
              <a href="/caledarios" className="calendars">
                <MdOutlineCalendarMonth />
                <p className="text">Calendários</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

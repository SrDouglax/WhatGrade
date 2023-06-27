import { useEffect } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import i01 from "../../assets/home/carousel/Carousel01.png";
import i02 from "../../assets/home/carousel/banner-site-EA-UPE-2024.png";
import i03 from "../../assets/home/carousel/banner-site-SSA-UPE-2024-1000x517px.jpg";
import { MdCalculate, MdChat, MdOutlineCalendarMonth, MdSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../services/firebase";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    firebaseAuth.getUser().then((user) => {
      if (!user) {
        navigate("/");
      }
      console.log(user);
    });
  }, []);
  const carouselImages = [
    <img src={i01} key={1} alt="imagem do carrossel" />,
    <img src={i02} key={2} alt="imagem do carrossel" />,
    <img src={i03} key={3} alt="imagem do carrossel" />,
  ];

  function handleImageClick(index: number, item: React.ReactNode) {
    if (index > 0) {
      window.open("https://processodeingresso.upe.pe.gov.br/", "_blank");
    }
  }

  return (
    <div className="Home">
      <Header hasLink={false} showHelp={true} />
      <div className="scroll">
        <div className="carousel">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            onClickItem={handleImageClick}
            autoPlay={true}
            infiniteLoop={true}
          >
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
              <a href="/calculadoras" className="calculators">
                <MdCalculate />
                <p className="text">Calculadoras</p>
              </a>
              <a className="universities">
                <MdSchool />
                <p className="text">Universidades</p>
              </a>
              <a href="/chats" className="forums">
                <MdChat />
                <p className="text">Bate-Papos</p>
              </a>
              <a className="calendars">
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

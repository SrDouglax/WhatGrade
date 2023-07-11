"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import i01 from "./../../assets/home/carousel/Carousel01.png";
import i02 from "./../../assets/home/carousel/Carousel02.png";
import i03 from "./../../assets/home/carousel/Carousel03.png";
import Image from "next/image";

export default function HomeCarousel() {
  const carouselImages = [
    <Image src={i01} key={1} alt="imagem do carrossel" />,
    <Image src={i02} key={2} alt="imagem do carrossel" />,
    <Image src={i03} key={3} alt="imagem do carrossel" />,
  ];

  function handleImageClick(index: number, item: React.ReactNode) {
    switch (index) {
      case 1:
        window.open("https://processodeingresso.upe.pe.gov.br/", "_blank");
        break;

      case 2:
        window.open("https://www.upe.br/", "_blank");
        break;

      default:
        break;
    }
  }

  return (
    <div className="carousel">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        onClickItem={handleImageClick}
        autoPlay={true}
        infiniteLoop={true}>
        {carouselImages}
      </Carousel>
    </div>
  );
}

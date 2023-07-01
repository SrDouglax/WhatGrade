'use client'

import { useEffect } from "react";
import Header from "./../components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import i01 from "./../assets/home/carousel/Carousel01.png";
import i02 from "./../assets/home/carousel/banner-site-EA-UPE-2024.png";
import i03 from "./../assets/home/carousel/banner-site-SSA-UPE-2024-1000x517px.jpg";
import { MdCalculate, MdChat, MdOutlineCalendarMonth, MdSchool } from "react-icons/md";
import { firebaseAuth } from "./../services/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    firebaseAuth.getUser().then((user) => {
      if (!user.hasUser) {
        router.push("/login");
      }
    });
  }, []);
  const carouselImages = [
    <Image src={i01} key={1} alt="imagem do carrossel" />,
    <Image src={i02} key={2} alt="imagem do carrossel" />,
    <Image src={i03} key={3} alt="imagem do carrossel" />,
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
              Bookshelf é um projeto individual e tem como objetivo ajudar todos os que
              pretendem ingressar em alguma faculdade brasileira.
            </p>
          </div>
          <div className="featured">
            <h2 className="title">Links em destaque</h2>
            <div className="items">
              <a href="/calculadora/ssa" className="calcssa link">
                <p className="text">Calcular nota SSA3</p>
              </a>
              <a href="/isentos2023/ssa1" className="exemption link">
                <p className="text">Resultados Isenção SSA1</p>
              </a>
              <a href="/isentos2023/ssa2" className="exemption link">
                <p className="text">Resultados Isenção SSA2</p>
              </a>
              <a href="/isentos2023/ssa3" className="exemption link">
                <p className="text">Resultados Isenção SSA3</p>
              </a>
            </div>
          </div>
          <div className="pages">
            <h2 className="title">Páginas</h2>
            <div className="items">
              <a href="/calculadora" className="calculators">
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

import "./CourseInfo.scss";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "react-google-charts";

import chartsData from "./chartsData";

interface extraDataType {
  [key: string]: {
    img: string;
    description: string;
  };
}

const extraData: extraDataType = {
  Enfermagem: {
    img: "https://www.conhecerescola.com.br/wp-content/uploads/2018/05/197200-aperfeicoamento-para-os-tecnicos-em-enfermagem-conheca-quais-cursos-fazer.jpg",
    description:
      "Atuar na promoção, prevenção, recuperação e reabilitação dos pacientes, desenvolvendo habilidades técnicas e conhecimentos científicos no cuidado à saúde.",
  },
  Medicina: {
    img: "https://liferay-cdn.estacioprd.net/documents/316123/331980/medicina+%281%29.jpg/3c120ff8-7c2a-5d59-617e-4c6e2d431014?t=1598884925871",
    description:
      "Estudar e praticar a medicina, diagnosticando doenças, prescrevendo tratamentos e cuidando da saúde geral dos pacientes.",
  },
  Odontologia: {
    img: "https://nossafco.com.br/upload/nossa-fco/files/secoes/dicas/tudo-sobre-odontologia/tonyato-alvarega.jpeg",
    description:
      "Cuidar da saúde bucal dos pacientes, realizando diagnósticos, tratamentos e procedimentos odontológicos.",
  },
  Direito: {
    img: "https://blog.ebradi.com.br/wp-content/uploads/2022/12/post_thumbnail-6f393280636b8be3ba6dd6969630982b-510x392.jpeg",
    description:
      "Compreender e aplicar as leis em diferentes contextos sociais e profissionais.",
  },
  Administração: {
    img: "https://beduka.com/blog/wp-content/uploads/2019/01/Melhores-faculdades-de-administra%C3%A7%C3%A3o-do-Brasil.jpg",
    description:
      "Desenvolver habilidades gerenciais e estratégicas para atuar na gestão de empresas e organizações.",
  },
  Computação: {
    img: "https://itforum.com.br/wp-content/uploads/2018/12/universidade-1.jpg",
    description:
      "Explorar e desenvolver soluções tecnológicas por meio da programação e do uso de sistemas computacionais.",
  },
  Geografia: {
    img: "https://3048348.fs1.hubspotusercontent-na1.net/hubfs/3048348/geografic.jpg",
    description:
      "Estudar a relação entre o homem e o espaço geográfico, compreendendo fenômenos socioambientais e culturais.",
  },
  História: {
    img: "https://cdn2.hubspot.net/hubfs/3960387/hist%C3%B3ria%20unigranrio%20ead.jpg",
    description:
      "Investigar e analisar os eventos e processos do passado, buscando compreender as transformações históricas e suas implicações.",
  },
  Letras: {
    img: "https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2021/07/tudo-sobre-curso-de-letras.jpg",
    description:
      "Estudar a língua portuguesa e estrangeira, bem como a literatura, para atuar no ensino, pesquisa e produção textual.",
  },
  Matemática: {
    img: "https://cursos.aiu.edu/images/matematica.jpg",
    description:
      "Explorar as propriedades e aplicações dos números, das estruturas algébricas e das formas geométricas, entre outros conceitos matemáticos.",
  },
  Pedagogia: {
    img: "https://s3.static.brasilescola.uol.com.br/vestibular/2022/05/pedagogia.jpg",
    description:
      "Estudar os processos de ensino e aprendizagem, atuando na educação infantil, fundamental e no desenvolvimento de projetos educacionais.",
  },
  Psicologia: {
    img: "",
    description:
      "Compreender o comportamento humano, os processos mentais e emocionais, além de atuar no diagnóstico e tratamento de questões psicológicas.",
  },
  Fisioterapia: {
    img: "https://static.mundoeducacao.uol.com.br/vestibular/2021/09/fisioterapeuta.jpg",
    description:
      "Atuar na prevenção e reabilitação de lesões e doenças, por meio de técnicas terapêuticas e exercícios físicos.",
  },
  Nutrição: {
    img: "https://img.imageboss.me/revista-cdn/cdn/21154/736f80830a4840ce73b1b6cd2323f8cabb4f52f5.jpg?1563226148",
    description:
      "Promover a alimentação saudável e equilibrada, acompanhando e orientando indivíduos e grupos na busca pela saúde e qualidade de vida.",
  },
  "Saúde Coletiva": {
    img: "",
    description:
      "Atuar na promoção e organização de ações voltadas para a saúde pública, com foco na prevenção de doenças e na promoção do bem-estar coletivo.",
  },
  "Terapia Ocupacional": {
    img: "",
    description:
      "Auxiliar indivíduos com limitações físicas, emocionais ou sociais a desenvolverem habilidades e autonomia por meio de atividades ocupacionais.",
  },
  "Gestão em Logística": {
    img: "https://itec.net.br/projeto2018/wp-content/uploads/2018/02/logistica.jpg",
    description:
      "Planejar, controlar e otimizar processos logísticos, desde a produção até a entrega de produtos e serviços.",
  },
  "Ciências Biológicas": {
    img: "",
    description:
      "Estudar os seres vivos, sua estrutura, funcionamento e evolução, além de pesquisar e desenvolver soluções para questões biológicas.",
  },
  "Ciências Sociais": {
    img: "",
    description:
      "Analisar e compreender as relações sociais, culturais e políticas, investigando as dinâmicas e transformações da sociedade.",
  },
  "Educação Física": {
    img: "https://blog.estacio.br/wp-content/uploads/2021/03/estacio_sociedadedeensinosupoeriorestaciodesaltda_image_959-780x450.jpeg",
    description:
      "Promover a saúde e o bem-estar por meio da prática de atividades físicas, esportes e exercícios físicos.",
  },
  "Letras – Português/Espanhol": {
    img: "https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2021/07/tudo-sobre-curso-de-letras.jpg",
    description:
      "Estudar as línguas portuguesa e espanhola, bem como a literatura desses idiomas, para atuar no ensino e na tradução.",
  },
  "Letras – Português/Inglês": {
    img: "https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2021/07/tudo-sobre-curso-de-letras.jpg",
    description:
      "Estudar as línguas portuguesa e inglesa, bem como a literatura desses idiomas, para atuar no ensino e na tradução.",
  },
  "Serviço Social": {
    img: "",
    description:
      "Atuar na promoção e defesa dos direitos humanos, por meio de ações de assistência social, políticas públicas e projetos sociais.",
  },
  "Engenharia Civil": {
    img: "",
    description:
      "Projetar, construir e gerenciar obras e infraestruturas, buscando soluções eficientes e sustentáveis para os desafios da engenharia civil.",
  },
  "Engenharia da Computação": {
    img: "",
    description:
      "Desenvolver e projetar sistemas computacionais, hardware e software, aliando conhecimentos de engenharia e ciência da computação.",
  },
  "Engenharia de Controle e Automação": {
    img: "",
    description:
      "Projetar e automatizar sistemas industriais, utilizando conhecimentos de engenharia elétrica, eletrônica e de automação.",
  },
  "Engenharia Elétrica Eletrônica": {
    img: "",
    description:
      "Estudar e projetar sistemas e dispositivos elétricos e eletrônicos, aplicando princípios da engenharia elétrica e eletrônica.",
  },
  "Engenharia de Software": {
    img: "",
    description:
      "Projetar, desenvolver e implementar software eficiente e confiável, aplicando princípios de engenharia, metodologias ágeis e boas práticas de programação.",
  },
  "Engenharia Elétrica Eletrotécnica": {
    img: "",
    description:
      "Atuar no projeto, instalação e manutenção de sistemas elétricos, com foco em geração, transmissão e distribuição de energia elétrica.",
  },
  "Engenharia Elétrica Telecomunicações": {
    img: "",
    description:
      "Projetar e gerenciar sistemas de telecomunicações, como redes de telefonia, transmissão de dados e comunicação via satélite.",
  },
  "Engenharia Mecânica Industrial": {
    img: "",
    description:
      "Desenvolver e otimizar sistemas e processos mecânicos industriais, utilizando conhecimentos de engenharia mecânica.",
  },
  "Física de Materiais": {
    img: "",
    description:
      "Estudar as propriedades físicas e químicas dos materiais, bem como suas aplicações na indústria, pesquisa e tecnologia.",
  },
  "Sistemas de Informação": {
    img: "",
    description:
      "Analisar, projetar e desenvolver sistemas de informação, integrando tecnologia da informação e conhecimentos de gestão.",
  },
};

export default function CourseInfo() {
  const period = '21-23'
  const { campus, course } = useParams();

  const cutsExtra = (
      (chartsData as any)[(campus as string)?.replaceAll("-", " ")][
        (course as string)?.replaceAll("-", " ") as string
      ].cutGrades as Array<string>
    ).reverse()
  const cuts = [
    ["", "Ampla", "Cotista"],
    ...cutsExtra,
    ["Breve...",cutsExtra[cutsExtra.length - 1][1], cutsExtra[cutsExtra.length - 1][2]],
  ];

  const vacanciesExtra = (
    (chartsData as any)[(campus as string)?.replaceAll("-", " ")][
      (course as string)?.replaceAll("-", " ") as string
    ].vacancies as Array<string>
  ).reverse();
  const vacancies = [
    ["", "Ampla", "A1", "A2"],
    ...vacanciesExtra,
    ["Breve...", vacanciesExtra[vacanciesExtra.length - 1][1], vacanciesExtra[vacanciesExtra.length - 1][2],vacanciesExtra[vacanciesExtra.length - 1][3]],
  ];

  const cutOptions = {
    legend: { position: "none" },
    colors: ["#af2222", "#ffa242"],
  };
  const vacanciesOptions = {
    legend: { position: "none" },
    colors: ["#2222af", "#22f2af", "#f222af"],
  };

  return (
    <div className="CouseInfo">
      <Header hasLink={true} backLink={`/p/${period ?? "21-23"}`} showHelp={true} />
      <div className="content">
        <div className="nameAndPicture">
          <p className="campus">({campus?.replaceAll("-", " ")})</p>
          <p className="desc">
            {extraData[course?.replaceAll("-", " ") as string]?.description}
          </p>
          <h1 className="courseName">{course?.replaceAll("-", " ")}</h1>
          <div className="fade"></div>
          <img
            src={
              extraData[course?.replaceAll("-", " ") as string]?.img ||
              "https://png.pngtree.com/background/20210712/original/pngtree-gradient-gray-background-with-modern-firm-shape-picture-image_1183862.jpg"
            }
            alt="course image"
            className="courseImage"
          />
        </div>
        <div className="cutGrade">
          <h2 className="title">Notas de corte</h2>
          <Chart
            chartType="Line"
            width={"100%"}
            height={"10rem"}
            data={cuts}
            options={cutOptions}
            className="chart"
          />
          <div className="captions">
            <div className="broad">
              <div className="color" style={{ backgroundColor: "#af2222" }}></div>
              <p className="text">Ampla concorrência</p>
            </div>
            <div className="cotist">
              <div className="color" style={{ backgroundColor: "#ffa242" }}></div>
              <p className="text">Cotista</p>
            </div>
          </div>
        </div>
        <div className="vacancies">
          <h2 className="title">Número de vagas</h2>
          <Chart
            chartType="Line"
            width={"100%"}
            height={"10rem"}
            data={vacancies}
            options={vacanciesOptions}
            className="chart"
          />
          <div className="captions">
            <div className="broad">
              <div className="color" style={{ backgroundColor: "#2222af" }}></div>
              <p className="text">Ampla concorrência</p>
            </div>
            <div className="a1">
              <div className="color" style={{ backgroundColor: "#22f2af" }}></div>
              <p className="text">A1</p>
            </div>
            <div className="a2">
              <div className="color" style={{ backgroundColor: "#f222af" }}></div>
              <p className="text">A2</p>
            </div>
          </div>
        </div>
        <div className="comments">
          <h2 className="title">Comentarios</h2>
          <p className="soon" style={{ color: "#808080" }}>
            Em breve...
          </p>
        </div>
      </div>
    </div>
  );
}

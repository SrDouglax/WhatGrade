import "./HowUse.scss";
import Header from "../../components/Header/Header";

import img01 from "../../assets/howUse/01.png";
import img02 from "../../assets/howUse/02.png";
import img03 from "../../assets/howUse/03.png";

export default function HowUse() {
  return (
    <div className="HowUse">
      <Header hasLink={true} backLink="/help" showHelp={true} />
      <div className="scroll">
        <div className="howUseContent">
          <h1 className="title">
            Como descobrir quanto preciso tirar no{" "}
            <span style={{ color: "#ff3d00" }}>SSA3</span>?
          </h1>
          <h2 className="step">1. Insira seu nome</h2>
          <p className="stepText">
            Clique no campo onde está escrito 'Digite seu nome' e, em seguida, escreva-o
            sem a utilização de acentos. Verifique acima se o seu nome foi encontado, por
            exemplo:
          </p>
          <img src={img01} alt="campo de texto" />
          <h2 className="step">2. Insira uma meta</h2>
          <p className="stepText">
            Clique no campo com com 'Sua meta' e depois escreva a nota que deseja
            alcançar. Na seção abaixo desse campo é possível ver a nota dos cursos de quem
            passou no ano anterior.
          </p>
          <img src={img02} alt="campo de texto" />
          <p className="stepText">
            Ao definir uma meta, uma nota aparecerá no campo 'SSA3', correspondendo à nota
            necessária para atingir a meta indicada. Caso você não tenha realizado alguma
            etapa, a nota estará zerada.
          </p>
          <h2 className="step">3. Cursos disponíveis e notas (Ano anterior)</h2>
          <img src={img03} alt="campo de texto" />
          <p className="stepText">
            Na seção abaixo da parte de descobrir a nota necessária, é possível visualizar
            todos os campus e cursos disponíveis de acordo com os dados do ano passado,
            tanto para ampla concorrência quanto para cotistas. Abaixo do nome, são
            apresentadas a nota de entrada mais baixa e mais alta para cada curso. Ao
            clicar no botão localizado mais à direita do curso, a meta é definida como o
            valor da menor nota necessária no ano anterior.
          </p>
          <a href="/">Ir para página principal</a>
        </div>
      </div>
    </div>
  );
}

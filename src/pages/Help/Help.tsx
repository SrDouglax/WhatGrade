import "./Help.scss";
import Header from "../../components/Header/Header";

import { MdOutlineInfo, MdMouse } from "react-icons/md";

export default function Help() {
  return (
    <div className="Help">
      <Header hasLink={true} backLink="/" />
      <div className="helpContent">
        <h1 className="title">Páginas de ajuda</h1>
        <div className="pages">
          <a href="/about" className="page about">
            <MdOutlineInfo />
            <p>Sobre o site</p>
          </a>
          <a href="/como-usar" className="page howUse">
            <MdMouse />
            <p>Como usar</p>
          </a>
        </div>
      </div>
    </div>
  );
}

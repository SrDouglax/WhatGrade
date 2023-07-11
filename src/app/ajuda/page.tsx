
import { MdConstruction } from 'react-icons/md';
import "./styles.scss";

export default function Help() {
  return (
    <div className="Help overflow-hidden">
      <div className="helpContent">
        <h1 className="title">Páginas de ajuda</h1>
        <div className="pages">
          <a className="page about items-center">
            <MdConstruction />
            <p>Em contrução...</p>
          </a>
        </div>
      </div>
    </div>
  );
}

import './Help.scss';

import { MdConstruction } from 'react-icons/md';

import Header from '../../components/Header/Header';

export default function Help() {
  return (
    <div className="Help">
      <Header hasLink={true} backLink="/" />
      <div className="helpContent">
        <h1 className="title">Páginas de ajuda</h1>
        <div className="pages">
          <a className="page about">
            <MdConstruction />
            <p>Em contrução...</p>
          </a>
        </div>
      </div>
    </div>
  );
}

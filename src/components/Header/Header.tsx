import "./Header.scss";

import { MdHelpOutline, MdNavigateBefore } from "react-icons/md";

import { Link } from "react-router-dom";

interface props {
  hasLink: boolean;
  backLink?: string;
  showHelp?: boolean;
}

export default function Header({ hasLink, backLink, showHelp }: props) {
  return (
    <div className="Header">
      {hasLink ? (
        <>
          <Link className="BackLink" to={backLink as any}>
            <MdNavigateBefore className="Icon" />
            <p className="Text">voltar</p>
          </Link>
        </>
      ) : (
        <a href="/" className="Title">
          What <span>Grade</span>
        </a>
      )}
      <div className="bubble">

      </div>
      {showHelp ? (
        <a href="/help" className="helpLink">
          <p>Ajuda</p>
          <MdHelpOutline className="help" />
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}

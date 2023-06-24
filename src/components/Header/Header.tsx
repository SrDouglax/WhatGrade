import "./Header.scss";

import { MdHelpOutline, MdNavigateBefore } from "react-icons/md";

import { Link } from "react-router-dom";

import IconWithName from "../../assets/components/header/IconWithName.png";

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
          <img src={IconWithName} alt="bookshelf icon" />
        </a>
      )}
      <div className="openDrawer">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="drawer">
        <div className="header">
          <div className="closeDrawer">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

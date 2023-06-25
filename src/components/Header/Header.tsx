import { useState } from "react";
import "./Header.scss";

import { MdNavigateBefore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import IconWithName from "../../assets/components/header/IconWithName.png";

interface props {
  hasLink: boolean;
  backLink?: string;
  showHelp?: boolean;
}

function runAnimation(element: HTMLElement, name: string, duration: number) {
  element.style.animation = ``;
  setTimeout(() => {
    element.style.animation = `${name} ${duration}s cubic-bezier(0.78, 0.05, 0.14, 1.51)`;
    setTimeout(() => {
      element.style.animation = ``;
    }, duration * 1000);
  }, 1);
}

export default function Header({ hasLink, backLink, showHelp }: props) {
  const [drawerClosed, setDrawerClosed] = useState(true);

  const navigate = useNavigate();
  return (
    <div className="Header">
      {hasLink ? (
        <>
          <div className="BackLink" onClick={() => {navigate(-1)}}>
            <MdNavigateBefore className="Icon" />
            <p className="Text">voltar</p>
          </div>
        </>
      ) : (
        <a href="/home" className="Title">
          <img src={IconWithName} alt="bookshelf icon" />
        </a>
      )}
      <div
        className="openDrawer"
        onClick={() => {
          runAnimation((document.querySelector(".openDrawer") as HTMLElement), 'boing', 0.5);
          runAnimation((document.querySelector(".openDrawer") as HTMLElement), 'boing', 0.5);
          setTimeout(()=>{
            setDrawerClosed(false);
          }, 150)
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`drawer ${drawerClosed ? "close" : "open"}`}>
        <div className="header">
          <div className="closeDrawer" onClick={() => setDrawerClosed(true)}>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

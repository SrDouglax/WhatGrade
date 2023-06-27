import { useEffect, useState } from "react";
import "./Header.scss";

import { MdNavigateBefore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import IconWithName from "../../assets/components/header/IconWithName.png";

interface props {
  hasLink: boolean;
  backLink?: string;
  showHelp?: boolean;
}

import i01 from "../../assets/components/header/ButtonIcon01.png";
import i02 from "../../assets/components/header/ButtonIcon02.png";
import i03 from "../../assets/components/header/ButtonIcon03.png";
import { User } from "firebase/auth";
import { firebaseAuth } from "../../services/firebase";
import { GlobalUser } from "../../services/firebase-interfaces";

function runAnimation(element: HTMLElement, name: string, duration: number) {
  element.style.animation = ``;
  setTimeout(() => {
    element.style.animation = `${name} ${duration}s cubic-bezier(0.78, 0.05, 0.14, 1.51)`;
    setTimeout(() => {
      element.style.animation = ``;
    }, duration * 1000);
  }, 1);
}

export default function Header({ hasLink }: props) {
  const [drawerClosed, setDrawerClosed] = useState(true);
  const [user, setUser] = useState<GlobalUser | undefined>();

  useEffect(() => {
    firebaseAuth.getUser().then(({user}) => {
      return setUser(user);
    })
  }, [])
  // console.log(user);
  

  const navigate = useNavigate();
  return (
    <div className="Header">
      {hasLink ? (
        <>
          <div
            className="BackLink"
            onClick={() => {
              navigate(-1);
            }}
          >
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
          runAnimation(
            document.querySelector(".openDrawer") as HTMLElement,
            "boing",
            0.5
          );
          runAnimation(
            document.querySelector(".openDrawer") as HTMLElement,
            "boing",
            0.5
          );
          setTimeout(() => {
            setDrawerClosed(false);
          }, 150);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`drawer ${drawerClosed ? "close" : "open"}`}>
        <div className="header">
          <h2>Páginas</h2>
          <div className="closeDrawer" onClick={() => setDrawerClosed(true)}>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="content">
          <div className="pages">
            <a href="/calculadoras" className="calc">
              <div className="dotColor"></div>
              <p className="name">Calculadoras</p>
            </a>
            <a href="" className="uni">
              <div className="dotColor"></div>
              <p className="name">Universidades</p>
            </a>
            <a href="" className="chats">
              <div className="dotColor"></div>
              <p className="name">Bate-Papos</p>
            </a>
            <a href="" className="cale">
              <div className="dotColor"></div>
              <p className="name">Calendário</p>
            </a>
            <a href="/feedback" className="feed">
              <div className="dotColor"></div>
              <p className="name">Feedback</p>
            </a>
          </div>
        </div>
        <div className="buttons">
          <a href="/conta" className="account">
            <img src={user?.photoURL || i03} alt="account icon" />
            <p className="text">Conta</p>
          </a>
          <a href="/ajuda" className="help">
            <img src={i02} alt="account icon" />
            <p className="text">Central de ajuda</p>
          </a>
          <a href="/politicas" className="politics">
            <img src={i01} alt="account icon" />
            <p className="text">Políticas de privacidade</p>
          </a>
        </div>
      </div>
    </div>
  );
}

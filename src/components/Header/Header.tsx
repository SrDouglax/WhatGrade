"use client";

// Codes
import { useEffect, useState } from "react";
import { MdChat, MdNavigateBefore } from "react-icons/md";
import { firebaseAuth } from "../../services/firebase";
import { GlobalUser } from "../../services/firebase-interfaces";
import { useRouter } from "next/navigation";
import "./Header.scss";

function runAnimation(element: HTMLElement, name: string, duration: number) {
  element.style.animation = ``;
  setTimeout(() => {
    element.style.animation = `${name} ${duration}s cubic-bezier(0.78, 0.05, 0.14, 1.51)`;
    setTimeout(() => {
      element.style.animation = ``;
    }, duration * 1000);
  }, 1);
}

export default function Header() {
  const [drawerClosed, setDrawerClosed] = useState(true);
  const [user, setUser] = useState<GlobalUser | undefined>();

  useEffect(() => {
    firebaseAuth.getUser().then(({ user }) => {
      return setUser(user);
    });
  }, []);
  // console.log(user);

  const navigate = useRouter();
  return (
    <div className="Header">
      <a href="/" className="Title">
        <img src={"/images/components/header/IconWithName.png"} alt="bookshelf icon" />
      </a>
      <div className="right flex gap-4 text-2xl items-center">
        <a href="/chat">
          <MdChat className="chats text-gray-200" />
        </a>
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
          }}>
          <div className="line bg-gray-200"></div>
          <div className="line bg-gray-200"></div>
          <div className="line bg-gray-200"></div>
        </div>
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
            <a href="/" className="home">
              <div className="dotColor"></div>
              <p className="name">Início</p>
            </a>
            <a href="/feedback" className="feed">
              <div className="dotColor"></div>
              <p className="name">Feedback</p>
            </a>
          </div>
        </div>
        <div className="buttons">
          <a href="/conta" className="account">
            <img
              src={user?.photoURL || "/images/components/header/ButtonIcon03.png"}
              alt="account icon"
            />
            <p className="text">Conta</p>
          </a>
          <a href="/ajuda" className="help">
            <img src={"/images/components/header/ButtonIcon02.png"} alt="account icon" />
            <p className="text">Central de ajuda</p>
          </a>
          <a href="/politicas" className="politics">
            <img src={"/images/components/header/ButtonIcon01.png"} alt="account icon" />
            <p className="text">Políticas de privacidade</p>
          </a>
        </div>
      </div>
    </div>
  );
}

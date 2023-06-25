import "./Welcome.scss";
import icon from "../.././assets/welcome/Icon.png";
import google from "../.././assets/welcome/google.png";
import facebook from "../.././assets/welcome/facebook.png";
import anonymous from "../.././assets/welcome/anonymous.png";
import { firebaseAuth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Welcome() {

  const navigate = useNavigate();

  useEffect(() => {
    firebaseAuth.getUser().then((user) => {
      if (user) {
        navigate("/home")
      }
    })
  }, [])
  
  function handleGoogleLogin() {
    firebaseAuth
      .signInWithGoogle()
      .then((u) => {
        navigate("/home");
        console.log(u);
      })
      .catch((u) => {
        console.log(u);
      });
  }
  function handleFacebookLogin() {
    firebaseAuth
      .signInWithFacebook()
      .then((u) => {
        navigate("/home");
        console.log(u);
      })
      .catch((u) => {
        console.log(u);
      });
  }
  function handleAnonymousLogin() {
    firebaseAuth
      .signInAnonymously()
      .then((u) => {
        navigate('/home')
        console.log(u);
      })
      .catch((u) => {
        console.log(u);
      });
  }

  return (
    <div className="Welcome">
      <div className="background">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="content">
        <h1 className="bookshelf">
          <span className="book">Book</span>
          <span className="shelf">Shelf</span>
        </h1>
        <div className="icon">
          <img src={icon} alt="bookshelf icon" />
        </div>
        <div className="loginOptions">
          <div className="google" onClick={handleGoogleLogin}>
            <img src={google} alt="" className="icon" />
            <p className="option">Entrar com Google</p>
          </div>
          <div className="facebook" style={{opacity: "0.2"}}>
            <img src={facebook} alt="" className="icon" />
            <p className="option">Entrar com Facebook</p>
          </div>
          <div className="anonymous" onClick={handleAnonymousLogin}>
            <img src={anonymous} alt="" className="icon" />
            <p className="option">Entrar Anonimamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}

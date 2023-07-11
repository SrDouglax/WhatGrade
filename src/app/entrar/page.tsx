"use client";

import { Bebas_Neue, Roboto } from "@/assets/fonts/fonts";
import { firebaseAuth } from "../../services/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Icon from '../../assets/login/Icon.png'
import Google from "../../assets/login/google.png";
import Facebook from "../../assets/login/facebook.png";
import Anonymous from "../../assets/login/anonymous.png";
import "./styles.css";

export default function Welcome() {
  const router = useRouter();

  firebaseAuth.getUser().then((user) => {
    if (user.hasUser) {
      router.push("/");
    }
  });

  function handleGoogleLogin() {
    firebaseAuth.signInWithGoogle().then((u) => {
      router.push("/");
    });
  }
  function handleFacebookLogin() {
    firebaseAuth.signInWithFacebook().then((u) => {
      router.push("/");
    });
  }
  function handleAnonymousLogin() {
    firebaseAuth.signInAnonymously().then((u) => {
      router.push("/");
    });
  }

  return (
    <div className="Welcome w-full h-full">
      <div className="background w-full h-full absolute overflow-hidden blur-3xl opacity-50">
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            left: "-8rem",
            top: "10rem",
            width: "12rem",
            aspectRatio: "1",
            animation: "moving ease 15s infinite forwards",
          }}
        ></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            left: "70%",
            top: "-8rem",
            width: "25rem",
            aspectRatio: "1",
            animation: "moving ease 16s infinite forwards",
          }}
        ></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            left: "80%",
            top: "60%",
            width: "40rem",
            aspectRatio: "1",
            animation: "moving ease 17s infinite forwards",
          }}
        ></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            right: "70%",
            top: "90%",
            width: "20rem",
            aspectRatio: "1",
            backgroundColor: "#FFA78B",
            animation: "moving ease 18s infinite forwards",
          }}
        ></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            right: "50%",
            top: "-10%",
            width: "10rem",
            aspectRatio: "1",
            backgroundColor: "#FFCEBE",
            animation: "moving ease 20s infinite forwards",
          }}
        ></div>
      </div>
      <div className="content w-full h-full flex relative z-10 flex-col items-center justify-center">
        <h1 className="bookshelf flex flex-col items-center leading-none">
          <span className="book text-red-500 text-8xl font-bold" style={Bebas_Neue.style}>
            Book
          </span>
          <span className="shelf text-white text-8xl font-bold" style={Bebas_Neue.style}>
            Shelf
          </span>
        </h1>
        <div className="icon w-24 mt-4">
          <Image src={Icon} alt="bookshelf icon" className="w-full"/>
        </div>
        <div className="loginOptions mt-12 flex flex-col items-center justify-center gap-3">
          <div
            className="google bg-white text-gray-600 w-72 max-w-95 rounded-lg flex flex-row p-2 text-base items-center ease-in-out duration-200 cursor-pointer hover:w-80"
            onClick={handleGoogleLogin}
          >
            <Image src={Google} alt="" className="icon h-6 w-6 mr-2" />
            <p style={Roboto.style}>Entrar com Google</p>
          </div>
          <div
            className="facebook bg-blue-500 text-white w-72 max-w-95 rounded-lg flex flex-row p-2 text-base items-center ease-in-out duration-200 cursor-default opacity-20"
            style={{ opacity: "0.2" }}
          >
            <Image src={Facebook} alt="" className="icon h-6 w-6 mr-2" />
            <p style={Roboto.style}>Entrar com Facebook</p>
          </div>
          <div
            className="anonymous bg-black text-white w-72 max-w-95 rounded-lg flex flex-row p-2 text-base items-center ease-in-out duration-200 cursor-pointer hover:w-80"
            onClick={handleAnonymousLogin}
          >
            <Image src={Anonymous} alt="" className="icon h-5 w-6 mr-2" />
            <p style={Roboto.style}>Entrar Anonimamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
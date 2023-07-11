import { Bebas_Neue } from "@/assets/fonts/fonts";
import Image from "next/image";
import Icon from '../../assets/login/Icon.png'
import HandleLoggedUser from "./_components/HandleLoggedUser";
import GoogleLogin from "./_components/GoogleLogin";
import FacebookLogin from "./_components/FacebookLogin";
import AnonymousLogin from "./_components/AnonymousLogin";
import "./styles.css";
export default function Welcome() {
  return (
    <div className="Welcome w-full h-full">
      <HandleLoggedUser />
      <div className="background w-full h-full absolute overflow-hidden blur-3xl opacity-50">
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            left: "-8rem",
            top: "10rem",
            width: "12rem",
            aspectRatio: "1",
            animation: "moving ease 15s infinite forwards",
          }}></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            left: "70%",
            top: "-8rem",
            width: "25rem",
            aspectRatio: "1",
            animation: "moving ease 16s infinite forwards",
          }}></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            left: "80%",
            top: "60%",
            width: "40rem",
            aspectRatio: "1",
            animation: "moving ease 17s infinite forwards",
          }}></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            right: "70%",
            top: "90%",
            width: "20rem",
            aspectRatio: "1",
            backgroundColor: "#FFA78B",
            animation: "moving ease 18s infinite forwards",
          }}></div>
        <div
          className="circle absolute bg-red-500 rounded-full"
          style={{
            right: "50%",
            top: "-10%",
            width: "10rem",
            aspectRatio: "1",
            backgroundColor: "#FFCEBE",
            animation: "moving ease 20s infinite forwards",
          }}></div>
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
          <Image src={Icon} alt="bookshelf icon" className="w-full" />
        </div>
        <div className="loginOptions mt-12 flex flex-col items-center justify-center gap-3">
          <GoogleLogin />
          <FacebookLogin />
          <AnonymousLogin />
        </div>
      </div>
    </div>
  );
}

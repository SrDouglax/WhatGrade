"use client";
import { firebaseAuth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import Facebook from "../../../assets/login/facebook.png";
import Image from "next/image";
import { Roboto } from "@/assets/fonts/fonts";

export default function FacebookLogin() {
  const router = useRouter();
  function HandleLogin() {
    firebaseAuth.signInWithFacebook().then((u) => {
      router.push("/");
    });
  }

  return (
    <div
      className="facebook bg-blue-500 text-white w-72 max-w-95 rounded-lg flex flex-row p-2 text-base items-center ease-in-out duration-200 cursor-default opacity-20"
      onClick={HandleLogin}>
      <Image src={Facebook} alt="" className="icon h-6 w-6 mr-2" />
      <p style={Roboto.style}>Entrar com Facebook</p>
    </div>
  );
}

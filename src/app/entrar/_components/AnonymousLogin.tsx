"use client";
import { firebaseAuth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import Anonymous from "../../../assets/login/anonymous.png";
import Image from "next/image";
import { Roboto } from "@/assets/fonts/fonts";

export default function AnonymousLogin() {
  const router = useRouter();
  function HandleLogin() {
    firebaseAuth.signInAnonymously().then((u) => {
      router.push("/");
    });
  }

  return (
    <div
      className="anonymous bg-black text-white w-72 max-w-95 rounded-lg flex flex-row p-2 text-base items-center ease-in-out duration-200 cursor-pointer hover:w-80"
      onClick={HandleLogin}>
      <Image src={Anonymous} alt="" className="icon h-5 w-6 mr-2" />
      <p style={Roboto.style}>Entrar com Anonimamente</p>
    </div>
  );
}

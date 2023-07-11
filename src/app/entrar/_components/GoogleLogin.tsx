"use client";
import { firebaseAuth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import Google from "../../../assets/login/google.png";
import Image from "next/image";
import { Roboto } from "@/assets/fonts/fonts";

export default function GoogleLogin() {
  const router = useRouter();
  function HandleLogin() {
    firebaseAuth.signInWithGoogle().then((u) => {
      router.push("/");
    });
  }

  return (
    <div
      className="google bg-white text-gray-600 w-72 max-w-95 rounded-lg flex flex-row p-2 text-base items-center ease-in-out duration-200 cursor-pointer hover:w-80"
      onClick={HandleLogin}>
      <Image src={Google} alt="" className="icon h-6 w-6 mr-2" />
      <p style={Roboto.style}>Entrar com Google</p>
    </div>
  );
}

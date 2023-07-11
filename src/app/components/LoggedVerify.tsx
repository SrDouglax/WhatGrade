"use client";

import { firebaseAuth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoggedVerify() {
  const router = useRouter();

  useEffect(() => {
    firebaseAuth.getUser().then((user) => {
      if (!user.hasUser) {
        router.push("/entrar");
      }
    });
  }, []);

  return (
    <div className="carousel"></div>
  );
}

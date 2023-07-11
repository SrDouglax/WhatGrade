"use client";
import { useRouter } from "next/navigation";
import FindGrade from "./components/findGrade/findGrade";
import "./styles.scss";
import { useEffect } from "react";
import { Metadata } from "next";

interface CalcSSAProps {
  params: { period: string[] };
}

export const metadata: Metadata = {
  description:
    "Calcule quanto você precisa tirar no SSA3 para entrar no curso dos sonhos.",
  keywords: [
    "calcular nota ssa",
    "calculadora ssa",
    "calculadora",
    "ssa",
    "vestibar",
    "pernambuco",
    "Brasil",
    "2023",
    "processodeingresso",
  ],
};

export default function CalcSSA({ params }: CalcSSAProps) {
  const router = useRouter();
  const periods = ["19-21", "20-22", "21-23"];

  useEffect(() => {
    if (!periods.includes(params.period?.[0]) && params.period?.[0]) {
      router.push("/");
    }
  }, [params.period]);

  return (
    <div className="App overflow-hidden">
      <div className="Content">
        <FindGrade period={(params.period?.[0] || periods.reverse()[0]) as string} />
      </div>
      <div className="BottomDegrade"></div>
    </div>
  );
}

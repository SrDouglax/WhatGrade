import pdfData from "./pdfData";

const divider = `Data de publicação: 27/06/2023.
Processo de Ingresso 2024 - SSA 3
Processamento Solicitações Isenção por NIS (Prazo para recurso: 28 a 30/6/2023)`;

const data = pdfData
  .replaceAll(divider, "")

interface exemptedType {
  name: string;
  number: string;
  exempted: string;
}

export default function GenerateExeptionData() {
  const regex = /^(.*?)\s+(\d+)\s+([^\r\n]+)\s/gm;
  
  const matches: exemptedType[] = Array.from(data.matchAll(regex)).map((match) => ({
    name: match[1],
    number: match[2],
    exempted: match[3].substring(0, 3),
  }));
  console.log(matches);

  return <></>;
}

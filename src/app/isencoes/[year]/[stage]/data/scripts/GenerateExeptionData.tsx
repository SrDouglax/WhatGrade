import pdfData from "./pdfData";

const divider = `Data da publicação: 10/07/2023.
Processo de Ingresso 2024 - SSA 3
Resultado dos Recursos das Solicitações de Isenção por NIS`;

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

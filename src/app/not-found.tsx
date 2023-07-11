import { MdReportGmailerrorred } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="NotFound flex flex-col items-center justify-center h-full w-full">
      <MdReportGmailerrorred className="Icon text-white text-8xl mb-2" />
      <p className="Text text-white px-4 py-2 text-xl bg-gray-300 rounded-lg">Página não encontrada...</p>
      <a href="/" className="mainPage text-white mt-5">
        Voltar para a página principal
      </a>
    </div>
  );
}

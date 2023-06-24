import "./Home.scss";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div className="Home">
      <Header hasLink={false} showHelp={true} />
      <div className="content"></div>
    </div>
  );
}

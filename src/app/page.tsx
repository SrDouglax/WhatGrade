import HomeCarousel from "./components/HomeCarousel";
import Categories from "./components/Categories";
import LoggedVerify from "./components/LoggedVerify";

export default function Home() {
  return (
    <div className="Home">
      <LoggedVerify />
      <div className="scroll">
        <HomeCarousel />
        <div className="content">
          <Categories />
        </div>
      </div>
    </div>
  );
}

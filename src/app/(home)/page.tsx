import HomeCarousel from "./_components/HomeCarousel";
import Categories from "./_components/Categories";
import LoggedVerify from "./_components/LoggedVerify";

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

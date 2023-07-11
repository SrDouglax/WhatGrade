import HomeCarousel from "./_components/HomeCarousel";
import Categories from "./_components/Categories";
import LoggedVerify from "./_components/LoggedVerify";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="Home">
      <Header />
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

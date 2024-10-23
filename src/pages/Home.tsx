import Support from "../components/Support";
import HomeHeader from "../components/HomeHeader";
import BannerText from "../components/BannerText";
import Repository from "../components/Repository";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center justify-evenly gap-6">
        <BannerText />
        <GetStarted />
      </div>
      <div className="w-full absolute bottom-20 flex px-40">
        <Repository />
        <Support />
      </div>
    </>
  );
};

export default Home;

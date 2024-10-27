import UserCard from "./UserCard";

const BannerText = () => {
  return (
    <div className="mt-60 flex justify-center items-center gap-4">
      <div  className="tracking-tight text-center font-bold text-7xl lg:text-7xl">
        Start To Create Your{" "}
        <div className="tracking-tight text-center inline font-bold from-[#5EA2EF] to-[#0072F5] text-7xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b">
          Own .MD
        </div>{" "}
        file
      </div>
      <UserCard />
    </div>
  );
};

export default BannerText;

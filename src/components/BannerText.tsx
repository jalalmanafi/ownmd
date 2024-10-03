import UserCard from "./UserCard";

const BannerText = () => {
  return (
    <div className="mt-60 flex justify-center items-center gap-4">
      <h2 className="tracking-tight text-center font-bold text-7xl lg:text-7xl">
        Start To Create Your{" "}
        <h2 className="tracking-tight text-center inline font-bold from-[#5EA2EF] to-[#0072F5] text-7xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b">
          Own .MD
        </h2>{" "}
        file
      </h2>
      <UserCard />
    </div>
  );
};

export default BannerText;

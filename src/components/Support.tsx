import { Link } from "@nextui-org/react";

const Support = () => {
  return (
    <Link
      isExternal
      className=" rotate-6 flex items-center justify-center gap-2 text-white w-44 font-semibold text-2xl rounded-2xl text-center ml-auto py-4 from-[#5EA2EF] to-[#0072F5] bg-gradient-to-b cursor-pointer hover:opacity-1"
    >
      <span role="img" className="text-4xl">
        🍻
      </span>{" "}
      Support
    </Link>
  );
};

export default Support;

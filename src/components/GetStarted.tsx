import { Link } from "@nextui-org/react";

const GetStarted = () => {
  return (
    <Link
      href="/editor"
      className="text-white font-semibold text-xl
    rounded-2xl text-center p-4 from-[#5EA2EF] to-[#0072F5]
    bg-gradient-to-b cursor-pointer hover:opacity-1 -rotate-3"
    >
      Get Started
    </Link>
  );
};

export default GetStarted;

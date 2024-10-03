import { Link } from "@nextui-org/react";

const Logo = () => {
  return (
    <Link href="/" className="text-inherit hover:opacity-1">
      <h1 className="inline-block bg-gradient-to-r -indent-2 text-4xl lg:text-6xl font-[900]">
        Own
      </h1>
      <h1 className="inline-block font-[900] from-[#5EA2EF] to-[#0072F5] bg-gradient-to-b text-4xl lg:text-6xl bg-clip-text text-transparent">
        MD
      </h1>
    </Link>
  );
};

export default Logo;

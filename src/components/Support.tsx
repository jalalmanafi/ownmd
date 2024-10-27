import { Link } from "@nextui-org/react";

import { translation } from "../utils/translation";

const Support = () => {
  return (
    <Link
      isExternal
      className="w-fit p-4 px-5 rotate-6 flex items-center justify-center gap-2 text-white font-semibold text-2xl rounded-2xl text-center ml-auto from-[#5EA2EF] to-[#0072F5] bg-gradient-to-b cursor-pointer hover:opacity-1"
    >
      <span role="img" className="text-4xl">
        🍻
      </span>{" "}
      {translation("beer")}
    </Link>
  );
};

export default Support;

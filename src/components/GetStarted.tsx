import { Link } from "react-router-dom";

import { translation } from "../utils/translation";

const GetStarted = () => {
  return (
    <Link
      to="/editor"
      className="text-white font-semibold text-xl
    rounded-2xl text-center p-4 from-[#5EA2EF] to-[#0072F5]
    bg-gradient-to-b cursor-pointer hover:opacity-1 -rotate-3"
    >
      {translation('getStarted')}
    </Link>
  );
};

export default GetStarted;

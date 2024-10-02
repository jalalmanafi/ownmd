import { Link } from "@nextui-org/react";
import { Github } from "lucide-react";

const Repository = () => {
  return (
    <Link href="https://github.com/jalalmanafi/ownmd" isExternal className="text-inherit absolute bottom-8 left-8 rotate-12 hover:opacity-1">
      <Github strokeWidth={1.5} size={45} />
    </Link>
  );
};

export default Repository;

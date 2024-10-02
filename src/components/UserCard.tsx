import { Link, User } from "@nextui-org/react";

const UserCard = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/jalalbmnf/"
      isExternal
      className=" border-dashed border backdrop-blur-sm brightness-150 border-default-400 p-4 rounded-large bg-gray-800 text-inherit rotate-12"
    >
      <User
        name="Jalal Manafi"
        description={<p className="text-primary-400">@jalalmanafi</p>}
        avatarProps={{
          src: "/public/jalalmanafi.jpeg",
        }}
      />
    </Link>
  );
};

export default UserCard;

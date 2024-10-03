import { Link, User } from "@nextui-org/react";

const UserCard = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/jalalbmnf/"
      isExternal
      className="border-dashed border backdrop-blur-sm brightness-150 border-default-400 p-4 rounded-large bg-gray-800 text-white rotate-12 hover:opacity-1"
    >
      <User
        name="Jalal Manafi"
        description={<p className="text-primary-400">@jalalmanafi</p>}
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/53921355?v=4",
        }}
      />
    </Link>
  );
};

export default UserCard;

import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Switch,
} from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";

import Logo from "./Logo";
import Language from "./Language";
import { useState } from "react";

const Navbar = () => {

  const [darkTheme,setDarkTheme] = useState(true)

  return (
    <NextNavbar className="h-[10vh]" position="sticky" isBordered maxWidth="xl">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="w-full gap-4" justify="end">
        <NavbarItem className="w-1/4">
          <Language />
        </NavbarItem>
        <NavbarItem>
          <Switch isSelected={darkTheme} onValueChange={setDarkTheme} classNames={{
            wrapper:darkTheme ? "from-[#5EA2EF] to-[#0072F5] bg-gradient-to-b" : ''
          }}
            startContent={<Sun/>}
            endContent={<Moon />}
          />
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
};

export default Navbar;

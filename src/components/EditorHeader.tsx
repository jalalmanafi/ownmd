import { FileDown } from "lucide-react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Logo from "./Logo";
import Sections from "./Sections";
import { downloadMarkdownFile } from "../utils";

interface Props {
  markdown: string;
}

const EditorHeader = ({ markdown }: Props) => {
  return (
    <Navbar position="sticky" isBordered maxWidth="full">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="w-full gap-4" justify="end">
        <NavbarItem className="w-1/3">
          <Sections />
        </NavbarItem>
        <NavbarItem>
          <Button
            className="from-[#5EA2EF] to-[#0072F5] bg-gradient-to-b"
            onClick={() => downloadMarkdownFile(markdown)}
            isIconOnly
            size="md"
          >
            <FileDown size={20} strokeWidth={1.5} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default EditorHeader;

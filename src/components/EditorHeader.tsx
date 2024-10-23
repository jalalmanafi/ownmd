import { FileDown } from "lucide-react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Logo from "./Logo";

interface Props {
  markdown: string;
}

const EditorHeader = ({ markdown }: Props) => {
  const downloadMarkdownFile = () => {
    const a = document.createElement("a");
    const blob = new Blob([markdown]);
    a.href = URL.createObjectURL(blob);
    a.download = "README.md";
    a.click();
  };

  return (
    <Navbar position="sticky" isBordered maxWidth="full">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="w-full gap-4" justify="end">
        <NavbarItem className="w-1/3">Something</NavbarItem>
        <NavbarItem>
          <Button
            className="from-[#5EA2EF] to-[#0072F5] bg-gradient-to-b"
            onClick={downloadMarkdownFile}
            isIconOnly
            size="lg"
          >
            <FileDown size={24} strokeWidth={1.5} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default EditorHeader;

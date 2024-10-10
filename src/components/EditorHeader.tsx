import { FileDown } from "lucide-react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Logo from "./Logo";
import { SectionType } from "../ts/models";

interface Props {
  markdown: string;
  sections:SectionType[];
}

const EditorHeader = ({ markdown,sections }: Props) => {
  const [section, setSection] = useState("");
  const [,setSearchParams] = useSearchParams()

  const downloadMarkdownFile = () => {
    const a = document.createElement("a");
    const blob = new Blob([markdown]);
    a.href = URL.createObjectURL(blob);
    a.download = "README.md";
    a.click();
  };

  useEffect(()=>{
    setSearchParams({section})
  },[section])

  return (
    <Navbar position="sticky" isBordered maxWidth="full">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="w-full gap-4" justify="end">
        <NavbarItem className="w-1/3">
          <Select
            defaultSelectedKeys={[sections[1].value]}
            size="lg"
            onChange={(e) => setSection(e.target.value)}
          >
            {sections.map((section) => (
              <SelectItem key={section.value}>{section.label}</SelectItem>
            ))}
          </Select>
        </NavbarItem>
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

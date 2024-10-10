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

import Logo from "./Logo";
import { useState } from "react";

interface Props {
  markdown: string;
}

const EditorHeader = ({ markdown }: Props) => {
  const [section, setSection] = useState("");

  const downloadMarkdownFile = () => {
    const a = document.createElement("a");
    const blob = new Blob([markdown]);
    a.href = URL.createObjectURL(blob);
    a.download = "README.md";
    a.click();
  };

  console.log(section);

  const sections = [
    { value: "acknowledgements", label: "Acknowledgements" },
    { value: "api_reference", label: "API Reference" },
    { value: "usage", label: "Usage" },
    { value: "installation", label: "Installation" },
    { value: "features", label: "Features" },
    { value: "screenshots", label: "Screenshots" },
    { value: "configuration", label: "Configuration" },
    { value: "contributing", label: "Contributing" },
    { value: "roadmap", label: "Roadmap" },
    { value: "license", label: "License" },
  ];

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

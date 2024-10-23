import { Select, SelectItem } from "@nextui-org/react";

const Language = () => {
  const languages = [
    { key: "AZ", label: "Azerbaijani" },
    { key: "EN", label: "English" },
  ];

  return (
    <Select defaultSelectedKeys={[languages[1].key]} size="md">
      {languages.map((lang) => (
        <SelectItem key={lang.key}>{lang.label}</SelectItem>
      ))}
    </Select>
  );
};

export default Language;

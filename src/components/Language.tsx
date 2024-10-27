import { Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  const languages = [
    { key: "az", label: "Azerbaijani" },
    { key: "en", label: "English" },
  ];

  return (
    <Select
      aria-label="Language"
      defaultSelectedKeys={[languages[1].key]}
      size="md"
    >
      {languages.map((lang) => (
        <SelectItem
          key={lang.key}
          onClick={() => i18n.changeLanguage(lang.key)}
        >
          {lang.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default Language;

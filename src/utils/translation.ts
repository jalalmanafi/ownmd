import { useTranslation } from "react-i18next";

export const translation = (word: string) => {
  const { t } = useTranslation();
  return t(word);
};

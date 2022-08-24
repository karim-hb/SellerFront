import useLocalStorage from "../useLocalStorage";
import * as translations from "./lang";
export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "fa", false);
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "fa",
    false
  );

  const translate = (key: any) => {
    const keys = key.split(".");

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
}

function getNestedTranslation(language: any, keys: any) {
  return keys.reduce(
    (obj: { [x: string]: any }, key: string | number) => {
      return obj?.[key];
    } /* , translations[language] */
  );
}

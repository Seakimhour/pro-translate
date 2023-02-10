import browser from "webextension-polyfill";

export const detectLanguage = async (text) => {
  const detectingLanguages = await browser.i18n.detectLanguage(text);
  return detectingLanguages.languages.length > 0
    ? detectingLanguages.languages[0].language
    : "auto";
};

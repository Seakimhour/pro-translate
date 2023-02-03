import browser from "webextension-polyfill";

export const detectLanguage = async (text) => {
  let detectingLanguages = await browser.i18n.detectLanguage(text);
  return detectingLanguages;
};

export const translateAPI = async (text, sourceLanguage, targetLanguage) => {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(
    text
  )}`;
  const response = await fetch(url).catch((error) => error.response);
  return response.json();
};
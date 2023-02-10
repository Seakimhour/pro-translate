import axios from "axios";

export const translateAPI = async (text, sourceLanguage, targetLanguage) => {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(
    text
  )}`;
  const response = await axios.get(url).catch((error) => error.response);
  return response.data;
};

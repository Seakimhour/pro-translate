/* eslint-disable no-undef */
const fs = require("fs");
const axios = require("axios");
const languages = [
  { code: "af", country: "Afrikaans" },
  { code: "sq", country: "Albanian" },
  { code: "am", country: "Amharic" },
  { code: "ar", country: "Arabic" },
  { code: "hy", country: "Armenian" },
  { code: "as", country: "Assamese" },
  { code: "ay", country: "Aymara" },
  { code: "az", country: "Azerbaijani" },
  { code: "bm", country: "Bambara" },
  { code: "eu", country: "Basque" },
  { code: "be", country: "Belarusian" },
  { code: "bn", country: "Bengali" },
  { code: "bho", country: "Bhojpuri" },
  { code: "bs", country: "Bosnian" },
  { code: "bg", country: "Bulgarian" },
  { code: "ca", country: "Catalan" },
  { code: "ceb", country: "Cebuano" },
  { code: "ny", country: "Chichewa" },
  { code: "zh-CN", country: "Chinese (Simplified)" },
  { code: "zh-TW", country: "Chinese (Traditional)" },
  { code: "co", country: "Corsican" },
  { code: "hr", country: "Croatian" },
  { code: "cs", country: "Czech" },
  { code: "da", country: "Danish" },
  { code: "dv", country: "Dhivehi" },
  { code: "doi", country: "Dogri" },
  { code: "nl", country: "Dutch" },
  { code: "en", country: "English" },
  { code: "eo", country: "Esperanto" },
  { code: "et", country: "Estonian" },
  { code: "ee", country: "Ewe" },
  { code: "tl", country: "Filipino" },
  { code: "fi", country: "Finnish" },
  { code: "fr", country: "French" },
  { code: "fy", country: "Frisian" },
  { code: "gl", country: "Galician" },
  { code: "ka", country: "Georgian" },
  { code: "de", country: "German" },
  { code: "el", country: "Greek" },
  { code: "gn", country: "Guarani" },
  { code: "gu", country: "Gujarati" },
  { code: "ht", country: "Haitian Creole" },
  { code: "ha", country: "Hausa" },
  { code: "haw", country: "Hawaiian" },
  { code: "iw", country: "Hebrew" },
  { code: "hi", country: "Hindi" },
  { code: "hmn", country: "Hmong" },
  { code: "hu", country: "Hungarian" },
  { code: "is", country: "Icelandic" },
  { code: "ig", country: "Igbo" },
  { code: "ilo", country: "Ilocano" },
  { code: "id", country: "Indonesian" },
  { code: "ga", country: "Irish" },
  { code: "it", country: "Italian" },
  { code: "ja", country: "Japanese" },
  { code: "jw", country: "Javanese" },
  { code: "kn", country: "Kannada" },
  { code: "kk", country: "Kazakh" },
  { code: "km", country: "Khmer" },
  { code: "rw", country: "Kinyarwanda" },
  { code: "gom", country: "Konkani" },
  { code: "ko", country: "Korean" },
  { code: "kri", country: "Krio" },
  { code: "ku", country: "Kurdish (Kurmanji)" },
  { code: "ckb", country: "Kurdish (Sorani)" },
  { code: "ky", country: "Kyrgyz" },
  { code: "lo", country: "Lao" },
  { code: "la", country: "Latin" },
  { code: "lv", country: "Latvian" },
  { code: "ln", country: "Lingala" },
  { code: "lt", country: "Lithuanian" },
  { code: "lg", country: "Luganda" },
  { code: "lb", country: "Luxembourgish" },
  { code: "mk", country: "Macedonian" },
  { code: "mai", country: "Maithili" },
  { code: "mg", country: "Malagasy" },
  { code: "ms", country: "Malay" },
  { code: "ml", country: "Malayalam" },
  { code: "mt", country: "Maltese" },
  { code: "mi", country: "Maori" },
  { code: "mr", country: "Marathi" },
  { code: "mni-Mtei", country: "Meiteilon (Manipuri)" },
  { code: "lus", country: "Mizo" },
  { code: "mn", country: "Mongolian" },
  { code: "my", country: "Myanmar (Burmese)" },
  { code: "ne", country: "Nepali" },
  { code: "no", country: "Norwegian" },
  { code: "or", country: "Odia (Oriya)" },
  { code: "om", country: "Oromo" },
  { code: "ps", country: "Pashto" },
  { code: "fa", country: "Persian" },
  { code: "pl", country: "Polish" },
  { code: "pt", country: "Portuguese" },
  { code: "pa", country: "Punjabi" },
  { code: "qu", country: "Quechua" },
  { code: "ro", country: "Romanian" },
  { code: "ru", country: "Russian" },
  { code: "sm", country: "Samoan" },
  { code: "sa", country: "Sanskrit" },
  { code: "gd", country: "Scots Gaelic" },
  { code: "nso", country: "Sepedi" },
  { code: "sr", country: "Serbian" },
  { code: "st", country: "Sesotho" },
  { code: "sn", country: "Shona" },
  { code: "sd", country: "Sindhi" },
  { code: "si", country: "Sinhala" },
  { code: "sk", country: "Slovak" },
  { code: "sl", country: "Slovenian" },
  { code: "so", country: "Somali" },
  { code: "es", country: "Spanish" },
  { code: "su", country: "Sundanese" },
  { code: "sw", country: "Swahili" },
  { code: "sv", country: "Swedish" },
  { code: "tg", country: "Tajik" },
  { code: "ta", country: "Tamil" },
  { code: "tt", country: "Tatar" },
  { code: "te", country: "Telugu" },
  { code: "th", country: "Thai" },
  { code: "ti", country: "Tigrinya" },
  { code: "ts", country: "Tsonga" },
  { code: "tr", country: "Turkish" },
  { code: "tk", country: "Turkmen" },
  { code: "ak", country: "Twi" },
  { code: "uk", country: "Ukrainian" },
  { code: "ur", country: "Urdu" },
  { code: "ug", country: "Uyghur" },
  { code: "uz", country: "Uzbek" },
  { code: "vi", country: "Vietnamese" },
  { code: "cy", country: "Welsh" },
  { code: "xh", country: "Xhosa" },
  { code: "yi", country: "Yiddish" },
  { code: "yo", country: "Yoruba" },
  { code: "zu", country: "Zulu" },
];

const enMessagesFile = fs.readFileSync(
  "src/assets/_locales/en/messages.json",
  "utf8"
);

const enMessages = JSON.parse(enMessagesFile);

const translateAPI = async (text, sourceLanguage, targetLanguage) => {
  return new Promise((resolve) => {
    axios({
      method: "get",
      url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(
        text
      )}`,
    }).then(function (response) {
      setTimeout(() => {
        if (response.data[0]) {
          resolve(response.data[0][0][0]);
        } else {
          resolve("");
        }
      }, 50);
    });
  });
};

const getLocalizationMessages = async (messages, code) => {
  let localizationMessages = JSON.parse(JSON.stringify(messages));
  for (const [key, value] of Object.entries(messages)) {
    if (key === "extension_name") continue;
    let translateText = await translateAPI(value.message, "en", code);
    console.log(code, translateText);
    localizationMessages[key].message = translateText;
  }
  return localizationMessages;
};

const run = async () => {
  for (let index = 0; index < languages.length; index++) {
    if (languages[index].code === "en") continue;

    let messages = await getLocalizationMessages(
      enMessages,
      languages[index].code
    );
    fs.promises
      .mkdir(`src/assets/_locales/${languages[index].code}`, {
        recursive: true,
      })
      .catch(console.error);
    fs.promises.writeFile(
      `src/assets/_locales/${languages[index].code}/messages.json`,
      JSON.stringify(messages)
    );
  }
};

run();

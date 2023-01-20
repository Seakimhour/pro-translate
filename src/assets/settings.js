import browser from "webextension-polyfill";

const defaultSettings = {
  targetLanguage: { code: "en", country: "English" },
  secondTargetLanguage: { code: "ja", country: "Japanese" },
  autoSwitch: true,
  targetFormat: "camel",
  autoSetFormat: true,
  showIcon: true,
};

export const getSettings = async () => {
  const response = await browser.storage.local.get("settings");
  return response.settings || defaultSettings;
};

export const setSettings = async (settingData) => {
  await browser.storage.local.set({ settings: settingData });
};

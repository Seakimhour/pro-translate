import browser from "webextension-polyfill";
import { formatCases } from "./format-cases.js";

const defaultSettings = {
  targetLanguage: { code: "en", country: "English" },
  secondTargetLanguage: { code: "ja", country: "Japanese" },
  autoSwitch: true,
  targetFormat: "camel",
  autoSetFormat: true,
  showIcon: true,
  cases: formatCases.map((c) => c.name),
};

export const getSettings = async () => {
  const response = await browser.storage.local.get("settings");
  return response.settings || defaultSettings;
};

export const setSettings = async (settings) => {
  await browser.storage.local.set({ settings: settings });
};

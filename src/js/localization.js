import browser from "webextension-polyfill";

export const getMessages = async (obj_messages) => {
  for (const [key] of Object.entries(obj_messages)) {
    obj_messages[key] = await browser.i18n.getMessage(key);
  }
  return obj_messages;
};

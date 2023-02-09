import { getSettings } from "./settings.js";

export const getMessages = async (obj_messages) => {
  const settings = await getSettings();
  const messagesPath = `_locales/${settings.uiLanguage}/messages.json`;
  fetch(messagesPath)
    .then((response) => response.json())
    .then((json) => {
      console.log(obj_messages);
      for (const [key] of Object.entries(obj_messages)) {
        obj_messages[key] = json[key].message;
      }
    });
  return obj_messages;
};

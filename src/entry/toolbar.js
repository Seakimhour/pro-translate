import browser from "webextension-polyfill";
import { createApp } from "vue";
import ProTranslate from "../view/popup/ProTranslate.vue";
import SwitchPanel from "../view/popup/SwitchPanel.vue";
import "/public/style.css";

const getCurrentTab = async () => {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await browser.tabs.query(queryOptions);
  return tab;
};

const actionClickHandler = async () => {
  const currentTab = await getCurrentTab();
  const selectedText = await browser.tabs.sendMessage(currentTab.id, {
    type: "selectedText",
  });

  if (selectedText) {
    const selectedPosition = { top: 0, bottom: 0, left: 0, right: 0 };
    const selectedDirection = "left";
    const onToolbar = true;

    createApp(ProTranslate, {
      selectedText,
      selectedPosition,
      selectedDirection,
      onToolbar,
    }).mount("#pro-translate");
  } else {
    createApp(SwitchPanel).mount("#pro-translate");
  }
};

actionClickHandler();

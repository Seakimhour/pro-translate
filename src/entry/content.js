import browser from "webextension-polyfill";
import { createApp } from "vue";
import ProTranslate from "../view/popup/ProTranslate.vue";
import { getSettings } from "../js/settings.js";
import "../css/output.css";

const init = () => {
  document.addEventListener("mouseup", mouseUpHandler);
  browser.runtime.onMessage.addListener((message) => {
    return Promise.resolve(
      message.type === "selectedText" ? window.getSelection().toString() : ""
    );
  });
};

const mouseUpHandler = async (mouseEvent) => {
  const isLeftClick = mouseEvent.button === 0;
  if (!isLeftClick) return;

  const settings = await getSettings();
  if (!settings.showIcon) return;

  const isInProTranslate =
    document.querySelector("#pro-translate") &&
    document.querySelector("#pro-translate").contains(mouseEvent.target);
  if (isInProTranslate) return;

  removePopup();

  const selection = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText.length === 0) return;

  const selectedRect = selection.getRangeAt(0).getBoundingClientRect();
  const selectedPosition = {
    right: selectedRect.right,
    left: selectedRect.left,
    top: selectedRect.top,
    bottom: selectedRect.bottom,
  };

  const range = document.createRange();
  range.setStart(selection.anchorNode, selection.anchorOffset);
  range.setEnd(selection.focusNode, selection.focusOffset);

  const selectedDirection = range.collapsed ? "left" : "right";

  showPopup(selectedText, selectedPosition, selectedDirection);
};

const removePopup = () => {
  const element = document.getElementById("pro-translate");
  if (element) element.parentNode.removeChild(element);
};

const showPopup = (selectedText, selectedPosition, selectedDirection) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="pro-translate"></div>`
  );

  const onToolbar = false;

  createApp(ProTranslate, {
    selectedText,
    selectedPosition,
    selectedDirection,
    onToolbar,
  }).mount("#pro-translate");
};

init();

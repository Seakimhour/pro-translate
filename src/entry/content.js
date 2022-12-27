import { createApp } from "vue";
import ProTranslate from "../view/popup/ProTranslate.vue";
import "/public/style.css";
console.log("hello world content todo something~3");
let prevSelectedText = "";

const init = () => {
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseUpHandler = (mouseEvent) => {
  const isLeftClick = mouseEvent.button === 0;
  if (!isLeftClick) return;

  const isInProTranslate =
    document.querySelector("#pro-translate") &&
    document.querySelector("#pro-translate").contains(mouseEvent.target);
  if (isInProTranslate) return;

  removePopup();

  const selection = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText.length === 0) return;
  if (prevSelectedText === selectedText) return;
  prevSelectedText = selectedText;

  const selectedRect = selection.getRangeAt(0).getBoundingClientRect();
  const clickedPosition = { x: mouseEvent.clientX, y: mouseEvent.clientY };

  const range = document.createRange();
  range.setStart(selection.anchorNode, selection.anchorOffset);
  range.setEnd(selection.focusNode, selection.focusOffset);

  const selectedDirection = range.collapsed ? "left" : "right";

  showPopup(selectedText, selectedRect, clickedPosition, selectedDirection);
};

const removePopup = () => {
  const element = document.getElementById("pro-translate");
  if (element) element.parentNode.removeChild(element);
};

const showPopup = (
  selectedText,
  selectedRect,
  clickedPosition,
  selectedDirection
) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="pro-translate"></div>`
  );

  createApp(ProTranslate, {
    selectedText,
    selectedRect,
    clickedPosition,
    selectedDirection,
  }).mount("#pro-translate");
};

init();

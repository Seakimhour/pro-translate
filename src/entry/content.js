import { createApp } from "vue";
import ProTranslate from "../view/popup/ProTranslate.vue";
import "/public/style.css";

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
  const selectedPosition = {
    right: selectedRect.right + window.scrollX,
    left: selectedRect.left + window.scrollX,
    top: selectedRect.top + window.scrollY,
    bottom: selectedRect.bottom + window.scrollY,
  };
  const clickedPosition = { x: mouseEvent.pageX, y: mouseEvent.pageY };

  const range = document.createRange();
  range.setStart(selection.anchorNode, selection.anchorOffset);
  range.setEnd(selection.focusNode, selection.focusOffset);

  const selectedDirection = range.collapsed ? "left" : "right";

  showPopup(selectedText, selectedPosition, clickedPosition, selectedDirection);
};

const removePopup = () => {
  const element = document.getElementById("pro-translate");
  if (element) element.parentNode.removeChild(element);
};

const showPopup = (
  selectedText,
  selectedPosition,
  clickedPosition,
  selectedDirection
) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="pro-translate"></div>`
  );

  createApp(ProTranslate, {
    selectedText,
    selectedPosition,
    clickedPosition,
    selectedDirection,
  }).mount("#pro-translate");
};

init();

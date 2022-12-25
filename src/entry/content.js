import { createApp } from 'vue'
import App from '../view/popup.vue'
console.log('hello world content todo something~')

const init = async () => {
  document.body.insertAdjacentHTML("beforeend", `<div id="pro-translate"></div>`);
  document.addEventListener("mouseup", handleMouseUp);
};

const handleMouseUp = async e => {

  const isLeftClick = e.button === 0;
  if (!isLeftClick) return;

  const isInThisElement =
    document.querySelector("#pro-translate") &&
    document.querySelector("#pro-translate").contains(e.target);
  if (isInThisElement) return;

  const selection = window.getSelection()
  const selectedText = selection.toString()
  if (selectedText.length === 0) return;
  const clickedPosition = { x: e.clientX, y: e.clientY };
  const selectedPosition = selection.getRangeAt(0).getBoundingClientRect();
  showPopup(selectedText, selectedPosition, clickedPosition);
};

const showPopup = (
  selectedText,
  selectedPosition,
  clickedPosition = null,
  shouldTranslate = false
) => {
  createApp(App).mount('#pro-translate')
};

init();
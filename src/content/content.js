import ProTranslate from "@/popup/ProTranslate.vue";

console.log("Hello from the content-script");

const init = () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    "<div id='pro-translate'></div>"
  );
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseUpHandler = (mouseEvent) => {
  if (stopCondition(mouseEvent)) return;

  removePopup();

  const selection = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText.length === 0) return;

  const selectedRect = selection.getRangeAt(0).getBoundingClientRect();
  const clickedPosition = { x: mouseEvent.clientX, y: mouseEvent.clientY };
  showPopup(selectedText, selectedRect, clickedPosition);
};

const stopCondition = (mouseEvent) => {
  const isLeftClick = mouseEvent.button === 0;
  if (!isLeftClick) return;

  const isInProTranslate =
    document.querySelector("#pro-translate-popup") &&
    document.querySelector("#pro-translate-popup").contains(mouseEvent.target);
  if (isInProTranslate) return;
};

const removePopup = () => {
  const element = document.getElementById("pro-translate-popup");
  if (element) element.parentNode.removeChild(element);
};

const showPopup = (selectedText, selectedRect, clickedPosition) => {
  console.log(selectedText, selectedRect, clickedPosition);
  new Vue({
    el: "#pro-translate",
    render: (h) =>
      h(ProTranslate, {
        props: {
          selectedText: selectedText,
          selectedRect: selectedRect,
          clickedPosition: clickedPosition,
        },
      }),
  });
};

init();

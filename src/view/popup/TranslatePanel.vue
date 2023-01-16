<template>
  <div
    id="p-t-t-p"
    class="absolute max-w-sm space-y-2 rounded border bg-white p-4 shadow"
    :style="panelPosition"
  >
    <div class="text-left">
      <p class="text-xs text-gray-400">Selected Text</p>
      <p>{{ selectedText }}</p>
    </div>
    <div class="text-left">
      <p class="text-xs text-gray-400">Translated Text</p>
      <p>{{ translatedText }}</p>
    </div>
    <FormatSection v-if="translatedText" :translatedText="translatedText" />
  </div>
</template>

<script>
import FormatSection from "./TranslatePanel/FormatSection.vue";

export default {
  components: {
    FormatSection,
  },
  props: [
    "selectedText",
    "clickedPosition",
    "selectedPosition",
    "selectedDirection",
  ],
  data() {
    return {
      translatedText: "",
      buttonSize: {
        height: 20,
        width: 26,
      },
      panelSize: {
        height: 0,
        width: 0,
      },
      offset: {
        height: 0,
        width: 0,
      },
      panelPosition: {
        top: 0,
        left: 0,
      },
    };
  },
  methods: {
    translate(text, sourceLanguage, targetLanguage) {
      fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(
          text
        )}`
      )
        .then((response) => response.json())
        .then((result) => (this.translatedText = result[0][0][0]));
    },
    setPanelPosition(size, position, offset, direction) {
      console.log(offset);
      this.panelPosition = {
        top:
          direction === "left"
            ? `${parseInt(position.top - size.width - offset.height)}px`
            : `${parseInt(position.bottom - offset.height)}px`,
        left:
          direction === "left"
            ? `${parseInt(position.left - size.width - offset.width)}px`
            : `${parseInt(position.right - offset.width)}px`,
      };
    },
    setOffset(buttonSize, panelSize, position, direction) {
      let left = position.left + panelSize.width;
      let right = position.right + panelSize.width + buttonSize.width;
      let top = position.top - buttonSize.width;
      let bottom = position.bottom;

      if (direction === "left") {
        if (left > window.innerWidth)
          this.offset.width = left - window.innerWidth;
        if (top > window.innerHeight)
          this.offset.height = top - window.innerHeight;
      } else {
        if (right > window.innerWidth)
          this.offset.width = right - window.innerWidth;
        if (bottom > window.innerHeight)
          this.offset.height = bottom - window.innerHeight;
      }
    },
  },
  mounted() {
    const translationPanel = document.getElementById("p-t-t-p");
    translationPanel.style.width = translationPanel.offsetWidth + 70 + "px";

    this.translate(this.selectedText, "auto", "en");

    this.panelSize = {
      height: translationPanel.offsetHeight,
      width: translationPanel.offsetWidth,
    };

    this.setOffset(
      this.buttonSize,
      this.panelSize,
      this.selectedPosition,
      this.selectedDirection
    );

    this.setPanelPosition(
      this.buttonSize,
      this.selectedPosition,
      this.offset,
      this.selectedDirection
    );
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>

<template>
  <div
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
    <FormatSection :translatedText="translatedText" />
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
    "selectedRect",
    "selectedDirection",
  ],
  data() {
    return {
      translatedText: "",
    };
  },
  computed: {
    panelPosition() {
      return {
        top:
          this.selectedDirection === "left"
            ? `${parseInt(this.clickedPosition.y) - 18}px`
            : `${parseInt(this.clickedPosition.y)}px`,
        left:
          this.selectedDirection === "left"
            ? `${parseInt(this.clickedPosition.x) - 25}px`
            : `${parseInt(this.clickedPosition.x)}px`,
      };
    },
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
  },
  mounted() {
    this.translate(this.selectedText, "auto", "en");
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>

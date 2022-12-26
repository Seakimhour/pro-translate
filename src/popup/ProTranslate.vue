<template>
  <div id="pro-translate-popup">
    <TranslateButton
      v-if="!showTranslatePanel"
      @click="showTranslatePanel = true"
    />
    <TranslatePanel v-else :selectedText="selectedText" />
  </div>
</template>

<script>
import TranslateButton from "./TranslateButton.vue";
import TranslatePanel from "./TranslatePanel.vue";

export default {
  components: {
    TranslateButton,
    TranslatePanel,
  },
  props: ["selectedText", "selectedRect", "clickedPosition"],
  data() {
    return {
      showTranslatePanel: false,
    };
  },
};
</script>

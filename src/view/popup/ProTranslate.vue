<template>
  <TranslateButton
    v-show="!showTranslatePanel"
    :selectedPosition="selectedPosition"
    :selectedDirection="selectedDirection"
    @click="showTranslatePanel = true"
  />
  <TranslatePanel
    v-show="showTranslatePanel"
    :selectedPosition="selectedPosition"
    :selectedDirection="selectedDirection"
    :selectedText="selectedText"
    :onToolbar="onToolbar"
  />
</template>

<script>
import TranslateButton from "./TranslateButton.vue";
import TranslatePanel from "./TranslatePanel.vue";

export default {
  components: {
    TranslateButton,
    TranslatePanel,
  },
  props: ["selectedText", "selectedPosition", "selectedDirection", "onToolbar"],
  data() {
    return {
      showTranslatePanel: false,
    };
  },
  created() {
    if (this.onToolbar) this.showTranslatePanel = true;
  },
};
</script>

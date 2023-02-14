<template>
  <Transition name="fade">
    <TranslateButton
      v-if="!showTranslatePanel"
      :selectedPosition="selectedPosition"
      :selectedDirection="selectedDirection"
      @click="this.showTranslatePanel = true"
    />
    <TranslatePanel
      v-else
      :selectedPosition="selectedPosition"
      :selectedDirection="selectedDirection"
      :selectedText="selectedText"
      :onToolbar="onToolbar"
    />
  </Transition>
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

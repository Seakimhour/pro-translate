<template>
  <Transition name="fade">
    <TranslateButton
      v-if="!showTranslatePanel"
      :selectedPosition="selectedPosition"
      :selectedDirection="selectedDirection"
      @translate="showTranslatePanel = true"
    />
    <TranslatePanel
      v-else
      :clickedPosition="clickedPosition"
      :selectedPosition="selectedPosition"
      :selectedDirection="selectedDirection"
      :selectedText="selectedText"
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
  props: [
    "selectedText",
    "selectedPosition",
    "clickedPosition",
    "selectedDirection",
  ],
  data() {
    return {
      showTranslatePanel: false,
    };
  },
};
</script>

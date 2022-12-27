<template>
  <Transition name="fade">
    <TranslateButton
      v-if="!showTranslatePanel"
      :clickedPosition="clickedPosition"
      :selectedDirection="selectedDirection"
      @translate="showTranslatePanel = true"
    />
    <TranslatePanel
      v-else
      :clickedPosition="clickedPosition"
      :selectedRect="selectedRect"
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
    "selectedRect",
    "clickedPosition",
    "selectedDirection",
  ],
  data() {
    return {
      showTranslatePanel: false,
    };
  },
  mounted() {
    console.log(this.selectedText);
    console.log(this.selectedRect);
    console.log(this.clickedPosition);
    console.log(this.selectedDirection);
    console.log(window.innerHeight, window.innerWidth);
  },
};
</script>

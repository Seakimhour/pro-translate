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
      :settingData="settingData"
    />
  </Transition>
</template>

<script>
import TranslateButton from "./TranslateButton.vue";
import TranslatePanel from "./TranslatePanel.vue";
import { getSettings } from "../../assets/settings.js";

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
      settingData: null,
    };
  },
  methods: {
    async initSetting() {
      this.settingData = await getSettings();
    },
  },
  mounted() {
    this.initSetting();
  },
};
</script>

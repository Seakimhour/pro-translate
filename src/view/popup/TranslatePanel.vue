<template>
  <div
    id="pro-traslate-translation-panel"
    :class="[
      onToolbar
        ? 'z-[2147483647] max-w-xs space-y-2 bg-white p-4'
        : 'absolute z-[2147483647] max-w-xs space-y-2 rounded border border-gray-200 bg-white p-4 shadow',
      initCompleted ? 'visible' : 'invisible',
    ]"
    :style="panelPosition"
  >
    <div class="text-left">
      <p class="text-xs text-gray-400">{{ messages.selected_text }}</p>
      <p class="text-base">{{ selectedText }}</p>
    </div>
    <div class="text-left">
      <p class="text-xs text-gray-400">{{ messages.translated_text }}</p>
      <p class="text-base">{{ translatedText }}</p>
    </div>
    <FormatSection
      v-if="settings"
      :text="formatText"
      :settings="settings"
      :messages="messages"
      @updateTargetFormat="updateTargetFormat"
    />
  </div>
</template>

<script>
import { getMessages } from "../../js/localization.js";
import { translateAPI } from "../../js/translate.js";
import { detectLanguage } from "../../js/detect-language.js";
import { getSettings, setSettings } from "../../js/settings.js";
import FormatSection from "./TranslatePanel/FormatSection.vue";

export default {
  components: {
    FormatSection,
  },
  props: ["selectedText", "selectedPosition", "selectedDirection", "onToolbar"],
  data() {
    return {
      messages: {
        selected_text: "",
        translated_text: "",
        formated_text: "",
      },
      initCompleted: false,
      translatedText: "",
      sourceLanguage: "auto",
      targetLanguage: "",
      formatText: "",
      settings: null,
      padding: 20,
      panelSize: { height: 0, width: 0 },
      offset: { height: 0, width: 0 },
      panelPosition: { top: 0, left: 0 },
    };
  },
  methods: {
    async initialize() {
      this.settings = await getSettings();
      this.messages = await getMessages(this.messages);
      await this.translate();
      await this.initFormat();
      await this.initPanel();
      this.initCompleted = true;
    },
    async translate() {
      this.targetLanguage = this.settings.targetLanguage.code;

      this.sourceLanguage = await detectLanguage(this.selectedText);

      const matchTargetLanguage = this.sourceLanguage === this.targetLanguage;

      if (matchTargetLanguage && this.settings.autoSwitch)
        this.targetLanguage = this.settings.secondTargetLanguage.code;

      const response = await translateAPI(
        this.selectedText,
        this.sourceLanguage,
        this.targetLanguage
      );

      if (response[0]) this.translatedText = response[0][0][0];
    },
    async initFormat() {
      if (!this.translatedText) return;

      if (this.targetLanguage === "en") {
        this.formatText = this.translatedText;
      } else if (this.sourceLanguage === "en") {
        this.formatText = this.selectedText;
      } else {
        const response = await translateAPI(
          this.selectedText,
          this.sourceLanguage,
          "en"
        );

        if (response[0]) this.formatText = response[0][0][0];
      }
    },
    async initPanel() {
      const translationPanel = await this.waitForElm(
        "#pro-traslate-translation-panel"
      );

      this.panelSize = {
        height: translationPanel.offsetHeight,
        width: translationPanel.offsetWidth,
      };

      this.setOffset(
        this.padding,
        this.panelSize,
        this.selectedPosition,
        this.selectedDirection
      );

      this.setPanelPosition(
        this.selectedPosition,
        this.offset,
        this.selectedDirection
      );
    },
    setPanelPosition(position, offset, direction) {
      this.panelPosition = {
        top:
          direction === "left"
            ? `${parseInt(position.top + window.scrollY - offset.height)}px`
            : `${parseInt(position.bottom + window.scrollY - offset.height)}px`,
        left:
          direction === "left"
            ? `${parseInt(position.left + window.scrollX - offset.width)}px`
            : `${parseInt(position.right + window.scrollX - offset.width)}px`,
      };
    },
    setOffset(padding, panelSize, position, direction) {
      let left = position.left + panelSize.width + padding;
      let right = position.right + panelSize.width + padding;
      let top = position.top + panelSize.height + padding;
      let bottom = position.bottom + panelSize.height + padding;

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
    async updateTargetFormat(targetFormat) {
      this.settings.targetFormat = targetFormat;
      await setSettings(this.settings);
    },
    waitForElm(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });
    },
  },
  mounted() {
    this.initialize();
  },
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}

p {
  margin: 0;
}
</style>

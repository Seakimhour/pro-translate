<template>
  <div class="absolute z-[2147483647]" :style="buttonPosition">
    <img
      :src="iconPath"
      :style="imageSize"
      alt="translate"
      class="box-content cursor-pointer rounded-sm border bg-white p-px shadow hover:border-gray-400 hover:shadow-md"
    />
  </div>
</template>

<script>
import browser from "webextension-polyfill";

export default {
  props: ["selectedDirection", "selectedPosition"],
  data() {
    return {
      iconPath: browser.runtime.getURL("icons/450.png"),
      imageSize: {
        height: "16px",
        width: "22px",
      },
      buttonSize: {
        height: 20,
        width: 26,
      },
    };
  },
  computed: {
    buttonPosition() {
      return {
        top:
          this.selectedDirection === "left"
            ? `${parseInt(
                this.selectedPosition.top +
                  window.scrollY -
                  this.buttonSize.height
              )}px`
            : `${parseInt(this.selectedPosition.bottom + window.scrollY)}px`,
        left:
          this.selectedDirection === "left"
            ? `${parseInt(
                this.selectedPosition.left +
                  window.scrollX -
                  this.buttonSize.width
              )}px`
            : `${parseInt(this.selectedPosition.right + window.scrollX)}px`,
      };
    },
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
</style>

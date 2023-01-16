<template>
  <div class="absolute" :style="buttonPosition">
    <img
      :src="iconPath"
      :style="imageSize"
      class="box-content cursor-pointer rounded-sm border bg-white p-px shadow hover:border-gray-400 hover:shadow-md"
      @click="$emit('translate')"
    />
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  props: ["selectedDirection", "selectedPosition"],
  data() {
    return {
      // iconPath: chrome.runtime.getURL("icons/128.png"),
      iconPath: "icons/128.png",
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
                this.selectedPosition.top - this.buttonSize.height
              )}px`
            : `${parseInt(this.selectedPosition.bottom)}px`,
        left:
          this.selectedDirection === "left"
            ? `${parseInt(
                this.selectedPosition.left - this.buttonSize.width
              )}px`
            : `${parseInt(this.selectedPosition.right)}px`,
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

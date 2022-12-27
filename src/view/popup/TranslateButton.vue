<template>
  <div
    class="absolute cursor-pointer rounded border bg-white p-px shadow hover:border-gray-400 hover:shadow-md"
    :style="buttonPosition"
    @click="$emit('translate')"
  >
    <img class="rounded" :src="iconPath" />
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  props: ["clickedPosition", "selectedDirection"],
  data() {
    return {
      iconPath: chrome.runtime.getURL("icons/450.png"),
    };
  },
  computed: {
    buttonPosition() {
      return {
        height: "19px",
        width: "24px",
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
};
</script>

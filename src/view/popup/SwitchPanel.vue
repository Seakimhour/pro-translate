<template>
  <div class="flex">
    <div class="flex w-32 flex-col justify-center p-2 shadow">
      <div v-if="settings.showIcon" class="text-center text-xs">
        <img
          @click="updateShowIcon"
          class="h-auto w-full cursor-pointer"
          src="icons/450.png"
        />
        <p class="text-red-300">Click to turn off</p>
        <p class="mt-1">
          Show translate button will popup everytime text is selected
        </p>
      </div>
      <div v-else class="text-center text-xs">
        <img
          @click="updateShowIcon"
          class="h-auto w-full cursor-pointer"
          src="icons/gray-450.png"
        />
        <p class="text-red-300">Click to turn on</p>
        <p class="mt-1">
          Translate button will not show up when text is selected but you can
          still translate by clicking the Pro Translate icon in toolbar
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getSettings, setSettings } from "../../js/settings.js";

export default {
  data() {
    return {
      settings: null,
    };
  },
  methods: {
    async initialize() {
      this.settings = await getSettings();
    },
    async updateShowIcon() {
      this.settings.showIcon = !this.settings.showIcon;
      await setSettings(this.settings);
    },
  },
  created() {
    this.initialize();
  },
};
</script>

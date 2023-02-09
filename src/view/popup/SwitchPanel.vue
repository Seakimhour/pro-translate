<template>
  <div class="flex">
    <div class="flex w-32 flex-col justify-center p-2 shadow">
      <div v-if="settings.showIcon" class="text-center text-xs">
        <img
          @click="updateShowIcon"
          class="h-auto w-full cursor-pointer"
          src="icons/450.png"
        />
        <p class="text-red-300">{{ messages.turn_off }}</p>
        <p class="mt-1">{{ messages.turn_off_description }}</p>
      </div>
      <div v-else class="text-center text-xs">
        <img
          @click="updateShowIcon"
          class="h-auto w-full cursor-pointer"
          src="icons/gray-450.png"
        />
        <p class="text-red-300">{{ messages.turn_on }}</p>
        <p class="mt-1">{{ messages.turn_on_description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getMessages } from "../../js/localization.js";
import { getSettings, setSettings } from "../../js/settings.js";

export default {
  data() {
    return {
      messages: {
        turn_off: "",
        turn_off_description: "",
        turn_on: "",
        turn_on_description: "",
      },
      settings: null,
    };
  },
  methods: {
    async initialize() {
      this.settings = await getSettings();
      this.messages = await getMessages(this.messages);
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

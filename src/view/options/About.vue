<template>
  <div v-if="manifest" class="space-y-2">
    <div class="py-4">
      <p class="text-lg font-bold text-primary">
        {{ manifest.name }}
        <span class="rounded bg-primary px-1 font-light text-secondary"
          >v{{ manifest.version }}</span
        >
      </p>
      <p class="text-xs text-gray-400">
        {{ manifest.description }}
      </p>
    </div>
    <a
      class="text-lg font-bold text-primary"
      href="https://github.com/Seakimhour/pro-translate"
      >GitHub Page</a
    >
  </div>
</template>

<script>
import browser from "webextension-polyfill";

export default {
  data() {
    return {
      manifest: null,
    };
  },
  created() {
    this.manifest = browser.runtime.getManifest();
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
</style>

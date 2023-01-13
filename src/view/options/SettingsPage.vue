<template>
  <div class="mx-auto flex h-full max-w-3xl flex-row">
    <div class="w-40">
      <div class="flex justify-center py-6">
        <img class="h-16 w-auto" src="icons/450.png" />
      </div>
      <div class="cursor-pointer space-y-2 pr-10 text-right font-bold">
        <div
          @click="currentTab = 'general'"
          :class="
            currentTab === 'general'
              ? 'text-primary'
              : 'text-gray-400 hover:text-gray-500'
          "
        >
          General
        </div>
        <div
          @click="currentTab = 'about'"
          :class="
            currentTab === 'about'
              ? 'text-primary'
              : 'text-gray-400 hover:text-gray-500'
          "
        >
          About
        </div>
        <div
          @click="currentTab = 'privacy_policy'"
          :class="
            currentTab === 'privacy_policy'
              ? 'text-primary'
              : 'text-gray-400 hover:text-gray-500'
          "
        >
          Privacy Policy
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="h-24 border-b-2 border-primary">
        <h1 class="m-0 pt-12 text-primary">Settings</h1>
      </div>
      <General v-if="currentTab === 'general'" />
      <About v-if="currentTab === 'about'" />
      <PrivacyPolicy v-if="currentTab === 'privacy_policy'" />
    </div>
  </div>
</template>

<script>
import General from "./General.vue";
import About from "./About.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";

export default {
  components: {
    General,
    About,
    PrivacyPolicy,
  },
  data() {
    return {
      currentTab: "general",
    };
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

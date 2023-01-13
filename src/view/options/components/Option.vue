<template>
  <div class="flex w-full flex-row justify-between p-2">
    <div>
      <p>{{ label }}</p>
      <p class="text-xs text-gray-400">{{ description }}</p>
    </div>
    <div class="flex items-center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "description"],
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>

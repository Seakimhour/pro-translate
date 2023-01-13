<template>
  <div class="space-y-2">
    <div class="py-4">
      <p class="text-lg font-bold text-primary">
        Pro Translate
        <span class="rounded bg-primary px-1 font-light text-secondary"
          >v0.0.1</span
        >
      </p>
      <p class="text-sm">
        Translate selected text on the web page and convert to specified format.
      </p>
    </div>
    <a href="https://github.com/Seakimhour/pro-translate">GitHub</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: "v0.0.1",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
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

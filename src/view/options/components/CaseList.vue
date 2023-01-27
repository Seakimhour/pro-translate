<template>
  <div class="flex w-full flex-col p-2">
    <div>
      <p>Translation panel format and order</p>
      <p class="text-xs text-gray-400">
        Format cases that can be change in translate panel and display order
      </p>
    </div>
    <div class="pt-4">
      <div
        class="flex select-none flex-row space-x-1 overflow-auto pb-1 text-xs"
      >
        <div
          v-for="(formatCase, index) in orderedCases"
          :key="index"
          :class="
            userCases.includes(formatCase)
              ? 'cursor-pointer rounded-full bg-primary px-2 pb-0.5 text-white'
              : 'cursor-pointer rounded-full bg-gray-200 px-2 pb-0.5 hover:bg-primary/50'
          "
          @click="selectCase(formatCase)"
        >
          {{ formatCase }}
        </div>
      </div>
    </div>
    <div v-if="selectedCase.name" class="flex flex-row space-x-2 pt-2">
      <div class="rounded-full text-xs text-primary underline">
        {{ selectedCase.name }}
      </div>
      <div>
        <p class="text-xs">
          {{ selectedCase.discription }}
        </p>
        <p class="text-xs text-gray-400">ex: {{ selectedCase.example }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["formatCases", "cases"],
  data() {
    return {
      selectedCase: {
        name: null,
      },
      userCases: [],
    };
  },
  computed: {
    formatCasesName() {
      return this.formatCases.map((c) => c.name);
    },
    orderedCases() {
      let orderedCases = [];
      this.userCases.forEach((c) => {
        orderedCases.push(c);
      });
      this.formatCasesName.forEach((c) => {
        if (!orderedCases.includes(c)) orderedCases.push(c);
      });
      return orderedCases;
    },
  },
  methods: {
    selectCase(formatCase) {
      const INDEX = this.formatCasesName.indexOf(formatCase);
      this.selectedCase = this.formatCases[INDEX];
      if (this.userCases.includes(formatCase)) {
        this.userCases = this.userCases.filter((c) => c !== formatCase);
      } else {
        this.userCases.unshift(formatCase);
      }
      this.$emit("updateCases", this.userCases);
    },
  },
  created() {
    this.userCases = Object.values(this.cases);
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

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div class="space-y-1 text-left">
    <p class="text-xs text-gray-400">Formated Text</p>
    <div
      class="pro-translate-scrollbar-y-xs flex select-none flex-row space-x-1 overflow-auto pb-1 text-xs"
    >
      <div
        v-for="(formatCase, index) in formatCases"
        :key="index"
        :class="
          selectedCase === formatCase.name
            ? 'cursor-pointer rounded-full bg-gray-600 px-2 pb-0.5 text-white'
            : 'cursor-pointer rounded-full bg-gray-200 px-2 pb-0.5 hover:bg-gray-400'
        "
        @click="selectedCase = formatCase.name"
      >
        {{ formatCase.name }}
      </div>
    </div>
    <div class="flex flex-row items-center justify-between">
      <input
        class="h-8 w-full rounded-l bg-gray-200 px-2 text-sm focus:outline-none"
        :value="formatedText"
      />
      <div
        class="flex h-8 cursor-pointer select-none items-center rounded-r border border-gray-500 bg-gray-600 px-2 pb-0.5 text-xs text-white active:border-white"
        @click="copyToClipboard(formatedText)"
      >
        Copy
      </div>
    </div>
  </div>
</template>

<script>
import * as changeCase from "change-case";

export default {
  props: ["translatedText"],
  data() {
    return {
      selectedCase: "camel",
      formatCases: [
        {
          name: "camel",
          example: "testString",
          discription:
            "Transform into a string with the separator denoted by the next word capitalized.",
        },
        {
          name: "capital",
          example: "Test String",
          discription:
            "Transform into a space separated string with each word capitalized.",
        },
        {
          name: "constant",
          example: "TEST_STRING",
          discription:
            "Transform into upper case string with an underscore between words.",
        },
        {
          name: "dot",
          example: "test.string",
          discription:
            "Transform into a lower case string with a period between words.",
        },
        {
          name: "header",
          example: "Test-String",
          discription:
            "Transform into a dash separated string of capitalized words.",
        },
        {
          name: "lower",
          example: "test string",
          discription:
            "Transform into a lower cased string with spaces between words.",
        },
        {
          name: "param",
          example: "test-string",
          discription:
            "Transform into a lower cased string with dashes between words.",
        },
        {
          name: "pascal",
          example: "TestString",
          discription:
            "Transform into a string of capitalized words without separators.",
        },
        {
          name: "path",
          example: "test/string",
          discription:
            "Transform into a lower case string with slashes between words.",
        },
        {
          name: "sentence",
          example: "Test string",
          discription:
            "Transform into a lower case with spaces between words, then capitalize the string.",
        },
        {
          name: "snake",
          example: "test_string",
          discription:
            "Transform into a lower case string with underscores between words.",
        },
      ],
    };
  },
  computed: {
    formatedText() {
      return this.format(this.translatedText, this.selectedCase);
    },
  },
  methods: {
    format(text, formatCase) {
      switch (formatCase) {
        case "camel":
          return changeCase.camelCase(text);
        case "capital":
          return changeCase.capitalCase(text);
        case "constant":
          return changeCase.constantCase(text);
        case "dot":
          return changeCase.dotCase(text);
        case "header":
          return changeCase.headerCase(text);
        case "lower":
          return changeCase.noCase(text);
        case "param":
          return changeCase.paramCase(text);
        case "pascal":
          return changeCase.pascalCase(text);
        case "path":
          return changeCase.pathCase(text);
        case "sentence":
          return changeCase.sentenceCase(text);
        case "snake":
          return changeCase.snakeCase(text);
        default:
          return "";
      }
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    horizontalScroll() {
      const scrollbar = document.getElementsByClassName(
        "pro-translate-scrollbar-y-xs"
      )[0];
      scrollbar.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
          scrollbar.scrollLeft += 50;
          e.preventDefault();
        } else {
          scrollbar.scrollLeft -= 50;
          e.preventDefault();
        }
      });
    },
  },
  mounted() {
    this.horizontalScroll();
  },
};
</script>

<style scoped>
.pro-translate-scrollbar-y-xs::-webkit-scrollbar {
  height: 4px;
}

.pro-translate-scrollbar-y-xs::-webkit-scrollbar-track {
  border-radius: 99px;
}

.pro-translate-scrollbar-y-xs::-webkit-scrollbar-thumb {
  border-radius: 99px;
  background-color: rgb(209 213 219);
}

*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}

input {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}
</style>

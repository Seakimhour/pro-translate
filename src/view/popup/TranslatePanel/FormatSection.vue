<template>
  <div class="space-y-1 text-left">
    <p class="text-xs text-gray-400">{{ messages.formated_text }}</p>
    <div
      id="pro-translate-scrollbar-y-xs"
      class="flex select-none flex-row space-x-1 overflow-auto break-normal pb-1 text-xs"
    >
      <div
        v-for="(formatCase, index) in settings.cases"
        :key="index"
        :class="
          targetFormat === formatCase
            ? 'cursor-pointer rounded-full bg-gray-600 px-2 pb-0.5 text-white'
            : 'cursor-pointer rounded-full bg-gray-200 px-2 pb-0.5 hover:bg-gray-400'
        "
        @click="changeCase(formatCase)"
      >
        {{ formatCase }}
      </div>
    </div>
    <div class="flex flex-row items-center justify-between">
      <input
        class="h-8 w-full rounded-l bg-gray-200 px-2 text-xs focus:outline-none"
        :value="formatedText"
      />
      <div
        class="flex h-8 cursor-pointer select-none items-center rounded-r border border-gray-500 bg-gray-600 px-2 pb-0.5 text-xs text-white active:border-white"
        @click="copyToClipboard(formatedText)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#FFFFFF"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
          xml:space="preserve"
        >
          <g id="Text-files">
            <path
              d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228   C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999   c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64   h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002   C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228   c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999   c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699   c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946   c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999   h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"
            />
            <path
              d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005   c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997   C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"
            />
            <path
              d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986   c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016   C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"
            />
            <path
              d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997   s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997   S39.16465,29.4603004,38.6031494,29.4603004z"
            />
            <path
              d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997   s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997   S29.0059509,37.5872993,28.4444485,37.5872993z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import * as changeCase from "change-case";

export default {
  props: ["text", "settings", "messages"],
  data() {
    return {
      targetFormat: "",
    };
  },
  computed: {
    formatedText() {
      return this.format(this.text, this.targetFormat);
    },
  },
  methods: {
    format(text, targetFormat) {
      switch (targetFormat) {
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
    async changeCase(formatCase) {
      this.targetFormat = formatCase;

      if (this.settings.autoSetFormat) {
        this.$emit("updateTargetFormat", this.targetFormat);
      }
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    horizontalScroll() {
      const scrollbar = document.getElementById("pro-translate-scrollbar-y-xs");
      if (scrollbar) {
        scrollbar.addEventListener("wheel", function (e) {
          if (e.deltaY > 0) {
            scrollbar.scrollLeft += 50;
          } else {
            scrollbar.scrollLeft -= 50;
          }
          e.preventDefault();
        });
      }
    },
  },
  mounted() {
    this.horizontalScroll();
  },
  created() {
    this.targetFormat = this.settings.targetFormat;
  },
};
</script>

<style scoped>
#pro-translate-scrollbar-y-xs::-webkit-scrollbar {
  height: 4px;
}

#pro-translate-scrollbar-y-xs::-webkit-scrollbar-track {
  border-radius: 99px;
}

#pro-translate-scrollbar-y-xs::-webkit-scrollbar-thumb {
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

svg {
  width: 16px;
  height: 16px;
}
</style>

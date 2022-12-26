<template>
  <button></button>
</template>

<script>
export default {
  props: ["selectedText"],
  methods: {
    translate(text, sourceLanguage, targetLanguage) {
      fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(
          text
        )}`
      )
        .then((response) => response.json())
        .then((result) => console.log(result));
    },
  },
  mounted() {
    this.translate(this.selectedText, "auto", "en");
  },
};
</script>

<template>
  <button></button>
</template>

<script>
export default {
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
    this.translate("拡張機能の開発に関する基本を学ぶ", "auto", "en");
  },
};
</script>

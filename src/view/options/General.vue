<template>
  <div class="flex flex-col border-b-2 border-primary/20 py-2">
    <SettingOption
      :label="'Target Language'"
      :description="'Select the default target language.'"
    >
      <Dropdown :value="settingData.target_language">
        <div
          v-for="language in languages"
          :key="language.code"
          @click="settingData.target_language = language.country"
          class="cursor-pointer px-2 text-sm hover:text-primary"
        >
          {{ language.country }}
        </div>
      </Dropdown>
    </SettingOption>
    <SettingOption
      :label="'Second Target Language'"
      :description="'Select the default second target language.'"
    >
      <Dropdown :value="settingData.second_target_language">
        <div
          v-for="language in languages"
          :key="language.code"
          @click="settingData.second_target_language = language.country"
          class="cursor-pointer px-2 text-sm hover:text-primary"
        >
          {{ language.country }}
        </div>
      </Dropdown>
    </SettingOption>
    <SettingOption
      :label="'Automatically switch to the second target language'"
      :description="'When the selected text is the default target language, translate it to second target language'"
    >
      <input
        type="checkbox"
        v-model="settingData.auto_switch"
        class="rounded border-gray-300 p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
      />
    </SettingOption>
  </div>
  <div class="flex flex-col border-b-2 border-primary/20 py-2">
    <SettingOption
      :label="'Target Format'"
      :description="'Select the default target format, format can be change in translation panel.'"
    >
      <Dropdown :value="settingData.target_format">
        <div
          v-for="formatCase in formatCases"
          :key="formatCase.name"
          @click="settingData.target_format = formatCase.name"
          class="cursor-pointer px-2 text-sm hover:text-primary"
        >
          {{ formatCase.name }}
        </div>
      </Dropdown>
    </SettingOption>
    <SettingOption
      :label="'Automatically set default format'"
      :description="'When change format in translation panel, set the selected format to default format.'"
    >
      <input
        type="checkbox"
        v-model="settingData.auto_set_format"
        class="rounded border-gray-300 p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
      />
    </SettingOption>
    <CaseList :formatCases="formatCases" />
  </div>
  <div class="flex flex-col py-2">
    <SettingOption
      :label="'Show translation icon'"
      :description="'When select text an icon will popup that popup translation penal when click.'"
    >
      <input
        type="radio"
        name="show_icon"
        :value="true"
        v-model="settingData.show_icon"
        class="cursor-pointer p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
      />
    </SettingOption>
    <SettingOption
      :label="'Don\'t show icon'"
      :description="'Will not show icon when select text but you can still translate by clicking the Pro Translate icon in toolbar.'"
    >
      <input
        type="radio"
        name="show_icon"
        :value="false"
        v-model="settingData.show_icon"
        class="cursor-pointer p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
      />
    </SettingOption>
  </div>
</template>

<script>
import SettingOption from "./components/Option.vue";
import CaseList from "./components/CaseList.vue";
import Dropdown from "./components/Dropdown.vue";

export default {
  components: {
    SettingOption,
    CaseList,
    Dropdown,
  },
  data() {
    return {
      formatCases: [
        {
          name: "snake",
          example: "test_string",
          discription:
            "Transform into a lower case string with underscores between words.",
        },
        {
          name: "param",
          example: "test-string",
          discription:
            "Transform into a lower cased string with dashes between words.",
        },
        {
          name: "camel",
          example: "testString",
          discription:
            "Transform into a string with the separator denoted by the next word capitalized.",
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
          name: "capital",
          example: "Test String",
          discription:
            "Transform into a space separated string with each word capitalized.",
        },
      ],
      languages: [
        { code: "af", country: "Afrikaans" },
        { code: "sq", country: "Albanian" },
        { code: "am", country: "Amharic" },
        { code: "ar", country: "Arabic" },
        { code: "hy", country: "Armenian" },
        { code: "as", country: "Assamese" },
        { code: "ay", country: "Aymara" },
        { code: "az", country: "Azerbaijani" },
        { code: "bm", country: "Bambara" },
        { code: "eu", country: "Basque" },
        { code: "be", country: "Belarusian" },
        { code: "bn", country: "Bengali" },
        { code: "bho", country: "Bhojpuri" },
        { code: "bs", country: "Bosnian" },
        { code: "bg", country: "Bulgarian" },
        { code: "ca", country: "Catalan" },
        { code: "ceb", country: "Cebuano" },
        { code: "ny", country: "Chichewa" },
        { code: "zh-CN", country: "Chinese (Simplified)" },
        { code: "zh-TW", country: "Chinese (Traditional)" },
        { code: "co", country: "Corsican" },
        { code: "hr", country: "Croatian" },
        { code: "cs", country: "Czech" },
        { code: "da", country: "Danish" },
        { code: "dv", country: "Dhivehi" },
        { code: "doi", country: "Dogri" },
        { code: "nl", country: "Dutch" },
        { code: "en", country: "English" },
        { code: "eo", country: "Esperanto" },
        { code: "et", country: "Estonian" },
        { code: "ee", country: "Ewe" },
        { code: "tl", country: "Filipino" },
        { code: "fi", country: "Finnish" },
        { code: "fr", country: "French" },
        { code: "fy", country: "Frisian" },
        { code: "gl", country: "Galician" },
        { code: "ka", country: "Georgian" },
        { code: "de", country: "German" },
        { code: "el", country: "Greek" },
        { code: "gn", country: "Guarani" },
        { code: "gu", country: "Gujarati" },
        { code: "ht", country: "Haitian Creole" },
        { code: "ha", country: "Hausa" },
        { code: "haw", country: "Hawaiian" },
        { code: "iw", country: "Hebrew" },
        { code: "hi", country: "Hindi" },
        { code: "hmn", country: "Hmong" },
        { code: "hu", country: "Hungarian" },
        { code: "is", country: "Icelandic" },
        { code: "ig", country: "Igbo" },
        { code: "ilo", country: "Ilocano" },
        { code: "id", country: "Indonesian" },
        { code: "ga", country: "Irish" },
        { code: "it", country: "Italian" },
        { code: "ja", country: "Japanese" },
        { code: "jw", country: "Javanese" },
        { code: "kn", country: "Kannada" },
        { code: "kk", country: "Kazakh" },
        { code: "km", country: "Khmer" },
        { code: "rw", country: "Kinyarwanda" },
        { code: "gom", country: "Konkani" },
        { code: "ko", country: "Korean" },
        { code: "kri", country: "Krio" },
        { code: "ku", country: "Kurdish (Kurmanji)" },
        { code: "ckb", country: "Kurdish (Sorani)" },
        { code: "ky", country: "Kyrgyz" },
        { code: "lo", country: "Lao" },
        { code: "la", country: "Latin" },
        { code: "lv", country: "Latvian" },
        { code: "ln", country: "Lingala" },
        { code: "lt", country: "Lithuanian" },
        { code: "lg", country: "Luganda" },
        { code: "lb", country: "Luxembourgish" },
        { code: "mk", country: "Macedonian" },
        { code: "mai", country: "Maithili" },
        { code: "mg", country: "Malagasy" },
        { code: "ms", country: "Malay" },
        { code: "ml", country: "Malayalam" },
        { code: "mt", country: "Maltese" },
        { code: "mi", country: "Maori" },
        { code: "mr", country: "Marathi" },
        { code: "mni-Mtei", country: "Meiteilon (Manipuri)" },
        { code: "lus", country: "Mizo" },
        { code: "mn", country: "Mongolian" },
        { code: "my", country: "Myanmar (Burmese)" },
        { code: "ne", country: "Nepali" },
        { code: "no", country: "Norwegian" },
        { code: "or", country: "Odia (Oriya)" },
        { code: "om", country: "Oromo" },
        { code: "ps", country: "Pashto" },
        { code: "fa", country: "Persian" },
        { code: "pl", country: "Polish" },
        { code: "pt", country: "Portuguese" },
        { code: "pa", country: "Punjabi" },
        { code: "qu", country: "Quechua" },
        { code: "ro", country: "Romanian" },
        { code: "ru", country: "Russian" },
        { code: "sm", country: "Samoan" },
        { code: "sa", country: "Sanskrit" },
        { code: "gd", country: "Scots Gaelic" },
        { code: "nso", country: "Sepedi" },
        { code: "sr", country: "Serbian" },
        { code: "st", country: "Sesotho" },
        { code: "sn", country: "Shona" },
        { code: "sd", country: "Sindhi" },
        { code: "si", country: "Sinhala" },
        { code: "sk", country: "Slovak" },
        { code: "sl", country: "Slovenian" },
        { code: "so", country: "Somali" },
        { code: "es", country: "Spanish" },
        { code: "su", country: "Sundanese" },
        { code: "sw", country: "Swahili" },
        { code: "sv", country: "Swedish" },
        { code: "tg", country: "Tajik" },
        { code: "ta", country: "Tamil" },
        { code: "tt", country: "Tatar" },
        { code: "te", country: "Telugu" },
        { code: "th", country: "Thai" },
        { code: "ti", country: "Tigrinya" },
        { code: "ts", country: "Tsonga" },
        { code: "tr", country: "Turkish" },
        { code: "tk", country: "Turkmen" },
        { code: "ak", country: "Twi" },
        { code: "uk", country: "Ukrainian" },
        { code: "ur", country: "Urdu" },
        { code: "ug", country: "Uyghur" },
        { code: "uz", country: "Uzbek" },
        { code: "vi", country: "Vietnamese" },
        { code: "cy", country: "Welsh" },
        { code: "xh", country: "Xhosa" },
        { code: "yi", country: "Yiddish" },
        { code: "yo", country: "Yoruba" },
        { code: "zu", country: "Zulu" },
      ],
      settingData: {
        target_language: "English",
        second_target_language: "Japan",
        auto_switch: true,
        target_format: "camel",
        auto_set_format: true,
        show_icon: true,
      },
    };
  },
  watch: {
    settingData: {
      handler() {
        localStorage.setItem("SETTING_DATA", JSON.stringify(this.settingData));
      },
      deep: true,
    },
  },
  methods: {
    getUserSetting() {
      const SETTING_DATA = JSON.parse(localStorage.getItem("SETTING_DATA"));
      if (SETTING_DATA) {
        this.settingData = SETTING_DATA;
      } else {
        this.settingData.case_list = this.formatCases.map((c) => c.name);
        localStorage.setItem("SETTING_DATA", JSON.stringify(this.settingData));
      }
    },
  },
  mounted() {
    this.getUserSetting();
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

[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type="checkbox"] {
  border-radius: 0px;
}

[type="radio"] {
  border-radius: 100%;
}

[type="checkbox"]:focus,
[type="radio"]:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow);
}

[type="checkbox"]:checked,
[type="radio"]:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type="radio"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type="checkbox"]:checked:hover,
[type="checkbox"]:checked:focus,
[type="radio"]:checked:hover,
[type="radio"]:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type="checkbox"]:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type="checkbox"]:indeterminate:hover,
[type="checkbox"]:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}
</style>

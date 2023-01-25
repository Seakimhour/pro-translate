<template>
  <div v-if="settingData">
    <div class="flex flex-col border-b-2 border-primary/20 py-2">
      <SettingOption
        :label="'Target Language'"
        :description="'Select the default target language'"
      >
        <Dropdown :value="settingData.targetLanguage.country">
          <div
            v-for="language in languages"
            :key="language.code"
            @click="settingData.targetLanguage = language"
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
          v-model="settingData.autoSwitch"
          class="rounded border-gray-300 p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
        />
      </SettingOption>
      <SettingOption
        :label="'Second Target Language'"
        :description="'Select the default second target language'"
      >
        <Dropdown :value="settingData.secondTargetLanguage.country">
          <div
            v-for="language in languages"
            :key="language.code"
            @click="settingData.secondTargetLanguage = language"
            class="cursor-pointer px-2 text-sm hover:text-primary"
          >
            {{ language.country }}
          </div>
        </Dropdown>
      </SettingOption>
    </div>
    <div class="flex flex-col border-b-2 border-primary/20 py-2">
      <SettingOption
        :label="'Target Format'"
        :description="'Select the default target format, format can be change in translation panel'"
      >
        <Dropdown :value="settingData.targetFormat">
          <div
            v-for="formatCase in formatCases"
            :key="formatCase.name"
            @click="settingData.targetFormat = formatCase.name"
            class="cursor-pointer px-2 text-sm hover:text-primary"
          >
            {{ formatCase.name }}
          </div>
        </Dropdown>
      </SettingOption>
      <SettingOption
        :label="'Automatically set default format'"
        :description="'When change format in translation panel, set the selected format to default format'"
      >
        <input
          type="checkbox"
          v-model="settingData.autoSetFormat"
          class="rounded border-gray-300 p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
        />
      </SettingOption>
      <CaseList :formatCases="formatCases" />
    </div>
    <div class="flex flex-col py-2">
      <SettingOption
        :label="'Show translation icon'"
        :description="'When select text an icon will popup that popup translation penal when click'"
      >
        <input
          type="radio"
          name="showicon"
          :value="true"
          v-model="settingData.showIcon"
          class="cursor-pointer p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
        />
      </SettingOption>
      <SettingOption
        :label="'Don\'t show icon'"
        :description="'Will not show icon when select text but you can still translate by clicking the Pro Translate icon in toolbar'"
      >
        <input
          type="radio"
          name="showIcon"
          :value="false"
          v-model="settingData.showIcon"
          class="cursor-pointer p-2 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
        />
      </SettingOption>
    </div>
  </div>
</template>

<script>
import SettingOption from "./components/Option.vue";
import CaseList from "./components/CaseList.vue";
import Dropdown from "./components/Dropdown.vue";
import { getSettings, setSettings } from "../../assets/settings.js";
import { formatCases } from "../../assets/format-cases.js";
import { languages } from "../../assets/languages.js";

export default {
  components: {
    SettingOption,
    CaseList,
    Dropdown,
  },
  data() {
    return {
      formatCases: [],
      languages: [],
      settingData: null,
    };
  },
  watch: {
    settingData: {
      async handler() {
        await setSettings(this.settingData);
      },
      deep: true,
    },
  },
  methods: {
    async initSetting() {
      this.settingData = await getSettings();
    },
  },
  created() {
    this.initSetting();
    this.formatCases = formatCases;
    this.languages = languages;
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

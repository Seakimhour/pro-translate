<template>
  <div class="relative">
    <div @click="open = !open">
      <div
        class="flex cursor-pointer select-none flex-row items-center rounded bg-white p-2 shadow"
      >
        <p class="my-0 mr-1 w-full text-sm font-bold text-gray-600">
          {{ value }}
        </p>
        <svg
          fill="#539E8A"
          height="12px"
          width="12px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xml:space="preserve"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
          c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
          s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
    </div>

    <div v-show="open" class="fixed inset-0 z-40" @click="open = false"></div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="open"
        class="absolute z-50 mt-2 rounded-md shadow-lg"
        :class="[widthClass, alignmentClasses]"
        style="display: none"
        @click="open = false"
      >
        <div
          id="scroll"
          class="max-h-40 overflow-auto rounded-md ring-1 ring-black/5"
          :class="contentClasses"
        >
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    align: {
      default: "right",
    },
    width: {
      default: "48",
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"],
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    widthClass() {
      return {
        48: "w-48",
        40: "w-40",
        36: "w-36",
        20: "w-20",
        auto: "w-auto",
      }[this.width.toString()];
    },
    alignmentClasses() {
      if (this.align === "left") {
        return "origin-top-left left-0";
      } else if (this.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    },
  },
};
</script>
<style scoped>
#scroll::-webkit-scrollbar {
  width: 8px;
}

#scroll::-webkit-scrollbar-track {
  background-color: #f5f5f500;
}

#scroll::-webkit-scrollbar-thumb {
  border-radius: 99px;
  background-color: rgb(232, 232, 232);
}
</style>

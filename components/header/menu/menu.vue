<template>
  <div
    class="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
  >
    <div class="flex-none overflow-hidden flex items-center justify-center">
      <div
        class="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen"
      >
        <ul class="list-none py-4 px-0 m-0 block max-h-screen">
          <li
            class="p-0 m-6 text-2xl block"
            v-for="(data, index) in MENULINKS"
            :key="index"
          >
            <nuxt-link
              class="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
            >
              {{ data.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MENULINKS } from "../../../constants/constants";

export default defineComponent({
  components: {},

  data() {
    return {
      MENULINKS,
    };
  },

  setup() {
    return {};
  },
});
</script>

<style>
@import url(../../../assets/main.scss);
@import url(../../../assets/hero.scss);
</style>

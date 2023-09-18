<template>
  <nav class="w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-gray-dark-5 shadow-gray-dark-5 transition-all duration-300" >
    <div class="flex justify-between section-container">
      <nuxt-link to="/" class="link">
        <img
          src="../../../public/logo.svg"
          alt="Logo - Shubh Porwal"
          width="25"
          height="25"
        />
      </nuxt-link>

      <div class="outer-menu relative">
        <!-- <SoundBar /> -->
        <!-- SoundButton component can be added here if needed -->
        <input
          aria-labelledby="menu"
          class="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
          type="checkbox"
          aria-label="menu"
        />
        <div
          class="hamburger absolute top-2 right-0 w-6 h-6 flex items-center justify-center"
        >
          <div
            class="relative flex-none w-full bg-white duration-300 flex items-center justify-center"
          ></div>
        </div>
        <slot />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: {},
});
</script>

<style lang="scss" scoped>

@import url(../../../assets/main.scss);
@import url(../../../assets/hero.scss);
</style>

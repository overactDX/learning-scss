<template>
  <Loader v-if="showLoader" />
  <div v-if="!showLoader">
    <Header>
      <HeaderMenu />
    </Header>
    <ProgressbarProgressIndicator />
    <main className="flex flex-col">
      <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <!-- <Work /> -->
      <!-- <div className="pt-10 sm:pt-16 bg-gray-dark-4"></div> -->
      <!-- <LazyScript /> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

defineComponent({
  layout: "default",
});

export default defineComponent({
  data() {
    return {
      showLoader: true,
    };
  },
  setup() {
    return {};
  },

  methods: {
    loader() {
      setTimeout(() => {
        this.showLoader = false;
      }, 3000);
    },
  },
  mounted() {
    this.loader();
  },
});
</script>

<style  lang="scss">
@import url('../assets/main.scss');
</style>

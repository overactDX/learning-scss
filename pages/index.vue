<template>
  <div>
    <Loader v-if="showLoader" />
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
      <Work />
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
    hideLoaderAndScrollToTop() {
      setTimeout(() => {
        this.showLoader = false;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 2000);
    },
  },
  mounted() {
    this.hideLoaderAndScrollToTop();
  },
});
</script>

<style lang="scss"></style>

<template>
  <div>
    <Header>
      <HeaderMenu />
    </Header>
    <ProgressbarProgressIndicator />

    <main className="flex flex-col">
      <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
      <Hero />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

defineComponent({
  layout: "default",
});

export default defineComponent({
  components: {},

  setup() {
    return {};
  },
});
</script>

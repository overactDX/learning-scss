<template>
  <section
    class="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative select-none"
    ref="targetSection"
  >
    <div class="pt-14">
      <h1
        ref="quoteRef"
        class="font-medium text-2.70rem md:text-6xl lg:text-4rem text-center"
      >
        <span class="about-1 leading-tight">
          I'm a passionate Engineer who's focused on building scalable and
          performant apps.
        </span>
        <span class="about-2 leading-tight">
          I take responsibility to craft a good user experience using modern
          frontend architecture.
        </span>
      </h1>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

  setup() {
    return {};
  },
});
</script>

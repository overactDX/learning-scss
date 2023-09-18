<template>
  <section
    class="w-full relative select-none section-container transform-gpu"
    :id="MENULINKS[2].ref"
  >
    <!-- ref="targetSection" -->
    <!-- :class="{ 'min-h-screen': isDesktop }" -->
    <div class="flex flex-col py- justify-center h-full">
      <div
        class="flex flex-col inner-container transform-gpu"
        ref="sectionTitle"
      >
        <p class="uppercase tracking-widest text-gray-light-1 seq">PROJECTS</p>
        <h1 class="text-6xl mt-2 font-medium text-gradient w-fit seq">
          My Projects
        </h1>
        <h2 class="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 seq">
          Some things I've built with love, expertise and a pinch of magical
          ingredients.
        </h2>
      </div>
      <div class="project-wrapper seq">
        <ProjectProjectTitle :project="PROJECTS" />
      </div>
    </div>
  </section>
</template>

<script>
import { MENULINKS, PROJECTS } from "../../constants/constants";

export default {
  data() {
    return {
      MENULINKS,
      PROJECTS,
      targetSection: null,
      sectionTitle: null,
    };
  },
};
</script>

<style scoped lang="scss">
.project-wrapper::-webkit-scrollbar {
  display: none;
}
</style>

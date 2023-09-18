<template>
  <div class="grid grid-cols-6 col-span-2 gap-2 pt-10 pb-20">
    <div class="overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
      <a :href="project[0].url">
        <img
          class="h-full w-full object-cover object-top"
          :src="project[0].image"
          alt=""
        />
      </a>
    </div>
    <div class="overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
      <a :href="project[1].url">
        <img
          class="h-full w-full object-cover object-top"
          :src="project[1].image"
          alt=""
        />
      </a>
    </div>

    <div class="overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
      <a :href="project[2].url">
        <img
        class="h-full w-full object-cover object-top"
        :src="project[2].image"
          alt=""
        />
      </a>
    </div>
    <div class="overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
      <a :href="project[2].url">
        <img
        class="h-full w-full object-cover object-top"
        :src="project[2].image"
          alt=""
        />
      </a>
    </div>
    <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
      <div
        class="text-white text-xl absolute inset-0 bg-slate-900/80 flex justify-center items-center"
      >
        + 23
      </div>
      <img
      class="h-full w-full object-cover object-top"
        src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        alt=""
      />
    </div>
  </div>
  <!-- <a
    :href="project.url"
    class="overflow-hidden rounded-3xl"
    ref="projectCard"
    target="_blank"
    rel="noreferrer"
    :style="projectCardStyle"
  >
    <div
      class="h-[25rem] w-[38rem] bg-black project-tile rounded-3xl relative p-6 flex flex-col justify-between max-w-full projectTile"
      :style="gradientStyle"
    >
      <img
        src="/project-bg.svg"
        alt="project"
        class="absolute w-full h-full top-0 left-0 object-cover opacity-30"
      />
      <img
        :src="project.image"
        :alt="project.name"
        layout="fill"
        class="projectImage z-0"
        placeholder="blur"
        :blurDataURL="project.blurImage"
      />
      <div
        class="absolute top-0 left-0 w-full h-20"
        :style="gradientTopStyle"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-full h-32"
        :style="gradientBottomStyle"
      ></div>
      <h1
        class="font-medium text-3xl sm:text-4xl z-10 pl-2 transform-gpu"
        :style="nameTextStyle"
      >
        {{ project.name }}
      </h1>
      <div
        class="tech-icons w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden"
      >
        <div class="flex flex-col pb-8">
          <img
            v-for="(techIcon, i) in project.tech"
            :key="i"
            :src="`/projects/tech/${techIcon}.svg`"
            :alt="techIcon"
            height="45"
            width="45"
            :class="{ 'ml-16': i % 2 === 0 }"
            class="mb-4"
          />
        </div>
      </div>
      <h2
        class="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
        :style="descriptionTextStyle"
      >
        {{ project.description }}
      </h2>
    </div>
  </a> -->
</template>

<script>
import { ref, onMounted } from "vue";
import VanillaTilt from "vanilla-tilt";

export default {
  components: {},
  props: {
    project: Object,
  },
};
</script>

<style scoped module>
@import url("../projectTitle/title.scss");

</style>

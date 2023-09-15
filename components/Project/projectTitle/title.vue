<template>
  <a
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
  </a>
</template>

<script>
import { ref, onMounted } from "vue";
import VanillaTilt from "vanilla-tilt";

export default {
  components: {},
  props: {
    project: Object,
    classes: String,
    isDesktop: Boolean,
  },
  setup(props, { refs }) {
    const projectCard = ref(null);
    // Styles
    const projectCardStyle = {
      maxWidth: props.isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
      flex: "1 0 auto",
      WebkitMaskImage: "-webkit-radial-gradient(white, black)",
    };
    const gradientStyle = {
      background: `linear-gradient(90deg, ${props.project.gradient[0]} 0%, ${props.project.gradient[1]} 100%)`,
    };
    const gradientTopStyle = {
      background: `linear-gradient(180deg, ${props.project.gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
    };
    const gradientBottomStyle = {
      background: `linear-gradient(0deg, ${props.project.gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
    };
    const nameTextStyle = {
      transform: "translateZ(3rem)",
    };
    const descriptionTextStyle = {
      transform: "translateZ(0.8rem)",
    };
    // Tilt Options
    const options = {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    };
    onMounted(() => {
      VanillaTilt.init(projectCard.value, options);
    });
    return {
      projectCard,
      projectCardStyle,
      gradientStyle,
      gradientTopStyle,
      gradientBottomStyle,
      nameTextStyle,
      descriptionTextStyle,
    };
  },
};
</script>

<style scoped>
@import url("../projectTitle/title.scss");
</style>

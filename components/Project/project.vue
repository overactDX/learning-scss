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
      <div
        class="flex project-wrapper w-fit seq"
      >
        <ProjectProjectTitle
          v-for="(project, index) in PROJECTS"
          :key="project.name"
          :class="
            index === PROJECTS.length - 1 ? '' : 'mr-10 xs:mr-12 sm:mr-16'
          "
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, PROJECTS } from "../../constants/constants";

export default {
  // props: {
  //   isDesktop: Boolean,
  //   clientHeight: Number,
  // },
  data() {
    return {
      MENULINKS,
      PROJECTS,
      targetSection: null,
      sectionTitle: null,
    };
  },
  //   mounted() {
  //   this.targetSection = this.$refs.targetSection;
  //   this.sectionTitle = this.$refs.sectionTitle;

  //     let projectsScrollTrigger;
  //     let projectsTimeline;

  //     if (this.isDesktop) {
  //       [projectsTimeline, projectsScrollTrigger] = this.getProjectsSt();
  //     } else {
  //       const projectWrapper =
  //         this.targetSection.querySelector(".project-wrapper");
  //       projectWrapper.style.width = "calc(100vw - 1rem)";
  //       projectWrapper.style.overflowX = "scroll";
  //     }

  //     const [revealTimeline, revealScrollTrigger] = this.getRevealSt();

  //     this.$once("hook:beforeDestroy", () => {
  //       projectsScrollTrigger && projectsScrollTrigger.kill();
  //       projectsTimeline && projectsTimeline.kill();
  //       revealScrollTrigger && revealScrollTrigger.kill();
  //       revealTimeline && revealTimeline.progress(1);
  //     });
  //   },
  //   methods: {
  //     getRevealSt() {
  //       const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
  //       revealTl.from(
  //         this.$refs.targetSection.querySelectorAll(".seq"),
  //         {
  //           opacity: 0,
  //           duration: 0.5,
  //           stagger: 0.5,
  //         },
  //         "<"
  //       );

  //       const scrollTrigger = ScrollTrigger.create({
  //         trigger: this.$refs.targetSection,
  //         start: "top bottom",
  //         end: "bottom bottom",
  //         scrub: 0,
  //         animation: revealTl,
  //       });

  //       return [revealTl, scrollTrigger];
  //     },
  //     getProjectsSt() {
  //       const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
  //       const sidePadding =
  //         document.body.clientWidth -
  //         this.targetSection.querySelector(".inner-container").clientWidth;
  //       const elementWidth =
  //         sidePadding +
  //         this.targetSection.querySelector(".project-wrapper").clientWidth;
  //       this.targetSection.style.width = `${elementWidth}px`;
  //       const width = window.innerWidth - elementWidth;
  //       const duration = `${(elementWidth / window.innerHeight) * 100}%`;
  //       timeline
  //         .to(this.targetSection, { x: width })
  //         .to(this.sectionTitle, { x: -width }, "<");

  //       const scrollTrigger = ScrollTrigger.create({
  //         trigger: this.targetSection,
  //         start: "top top",
  //         end: duration,
  //         scrub: 0,
  //         pin: true,
  //         animation: timeline,
  //         pinSpacing: "margin",
  //       });

  //       return [timeline, scrollTrigger];
  //     },
  //   },
};
</script>

<style scoped>
.project-wrapper::-webkit-scrollbar {
  display: none;
}
</style>

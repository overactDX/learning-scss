<template>
  <section class="w-full relative select-none mt-44" :id="MENULINKS[1].ref">
    <div class="section-container py-16 flex flex-col justify-center">
      <img
        src="/right-pattern.svg"
        alt=""
        class="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
        loading="lazy"
        height="700"
        width="320"
      />
      <div class="flex flex-col skills-wrapper">
        <div class="flex flex-col">
          <p class="uppercase tracking-widest text-gray-light-1 seq">SKILLS</p>
          <h1 class="text-6xl mt-2 font-medium text-gradient w-fit seq">
            My Skills
          </h1>
          <h2 class="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
            I like to take responsibility to craft aesthetic user experience
            using modern frontend architecture.
          </h2>
        </div>
        <div class="mt-10">
          <h3
            class="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq"
          >
            LANGUAGES AND TOOLS
          </h3>
          <div class="flex flex-wrap gap-6 transform-gpu seq">
            <div
              v-for="skill in SKILLS.languagesAndTools"
              :key="skill"
              class="w-12 h-12"
            >
              <img
                :src="`/skills/${skill}.svg`"
                :alt="skill"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>

        <div class="mt-10">
          <h3
            class="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq"
          >
            Framework
          </h3>
          <div class="flex flex-wrap gap-6 transform-gpu seq">
            <div
              v-for="skill in SKILLS.framwork"
              :key="skill"
              class="w-12 h-12"
            >
              <img
                :src="`/skills/${skill}.svg`"
                :alt="skill"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>

        <!-- <div class="mt-10">
          <h3
            class="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq"
          >
            DATABASES
          </h3>
          <div class="flex flex-wrap gap-6 transform-gpu seq">
            <div
              v-for="databaseSkill in SKILLS.databases"
              :key="databaseSkill"
              class="w-12 h-12"
            >
              <img
                :src="`/skills/${databaseSkill}.svg`"
                :alt="databaseSkill"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div> -->

        <div class="mt-10">
          <h3
            class="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq"
          >
            Other
          </h3>
          <div class="flex flex-wrap gap-6 transform-gpu seq">
            <div
              v-for="otherSkill in SKILLS.other"
              :key="otherSkill"
              class="w-12 h-12"
            >
              <img
                :src="`/skills/${otherSkill}.svg`"
                :alt="otherSkill"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { MENULINKS, SKILLS } from "../../constants/constants"; // Adjust the import path as needed

export default {
  setup() {
    return {
      MENULINKS,
      SKILLS,
    };
  },
};
</script>

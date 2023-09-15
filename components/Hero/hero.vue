<template>
  <section
    ref="targetSection"
    class="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative"
    :id="MENULINKS[0].ref"
  >
    <div class="flex flex-col pt-40 md:pt-0 select-none">
      <h5 class="font-mono font-medium text-indigo-light seq intro">
        Hi, my name is
      </h5>
      <h1 class="text-white text-6xl font-semibold heroName">
        <span class="relative seq emphasize">Veerayutt</span>
        <span class="seq"> Pakpume</span>
      </h1>
      <p class="pt-6">
        <span
          class="seq text-3xl text-gray-light-3 font-mono leading-relaxed typewriter"
          ref="typedText"
        >
        </span>
      </p>
      <div class="seq pt-8">
        <Profile />
      </div>
      <div class="seq pt-6">
        <button href="/" class="primary__button hover:secondary__button">
          Let&apos;s Talk
        </button>
      </div>
    </div>
    <div
      class="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
      ref="lottieContainer"
    ></div>
  </section>
</template>

<script>
import lottie from "lottie-web";
import lottieFile from "../../public/lottie/lottie.json"; // Use the correct path to your JSON file
import Typed from "typed.js";
import { ref, onMounted } from "vue";
import { TYPED_STRINGS ,MENULINKS } from "../../constants/constants";

export default {
  data() {
    return {
      animation: null,
      MENULINKS,
    };
  },
  setup() {
    const typedText = ref(null);
    onMounted(() => {
      const options = {
        strings: TYPED_STRINGS,
        typeSpeed: 50,
        startDelay: 1000,
        backSpeed: 50,
        backDelay: 8000,
        loop: true,
        showCursor: false,
      };
      const typed = new Typed(typedText.value, options);
    });

    return {
      typedText,
    };
  },
  mounted() {
    this.animation = lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: lottieFile,
    });
  },
  beforeDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  },
};
</script>

<style scoped lang="scss">
@import url("../../assets/main.scss");
@import url("../../assets/hero.scss");
@import url(hero.scss);

</style>

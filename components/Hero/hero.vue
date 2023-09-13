<template>
  <section
    ref="targetSection"
    class="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
  >
    <div class="flex flex-col pt-40 md:pt-0 select-none">
      <h5 class="font-mono font-medium text-indigo-light seq">
        Hi, my name is
      </h5>
      <h1 class="text-white text-5xl font-semibold">
        <span class="relative styles.emphasize} seq">Veerayutt</span>
        <span class="seq"> Pakpume</span>
      </h1>
      <p>
        <span class="seq text-3xl text-gray-light-3 font-mono leading-relaxed"
          >test</span
        >
      </p>
      <div class="seq">
        <Profile />
      </div>
      <div class="seq pt-4">
        <button href="/" class="link">Let&apos;s Talk</button>
      </div>
    </div>
    <div
      class="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
      ref="lottieContainer"
    ></div>
  </section>
</template>

<script>
import lottie from 'lottie-web';
import lottieFile from '../../public/lottie/lottie.json'; // Use the correct path to your JSON file

export default {
  data() {
    return {
      animation: null,
    };
  },
  mounted() {
    // Load the animation data from a file
    this.animation = lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg', // You can change the renderer as needed
      loop: true,
      autoplay: true,
      animationData: lottieFile, // Use the imported JSON data
    });
  },
  beforeDestroy() {
    // Destroy the Lottie animation when the component is destroyed
    if (this.animation) {
      this.animation.destroy();
    }
  },
};
</script>


<style scoped>
@import url("../../assets/main.scss");
@import url("../../assets/hero.scss");

.typed-cursor {
  font-size: 2rem;
}
</style>

<template>
    <div class="progress w-full fixed top-0 z-50">
      <div ref="progress" class="progress-bar"></div>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';

export default defineComponent({
  layout: "default", 

  setup() {
    const progress = ref<HTMLElement | null>(null);

    onMounted(() => {
      const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = totalScroll / windowHeight;
        if (progress.value) {
          (progress.value as HTMLElement).style.transform = `scaleX(${scrolled})`;
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

    return {
      progress,
    };
  },
});
</script>

<style scoped>
@import url('../../assets/main.scss');
</style>

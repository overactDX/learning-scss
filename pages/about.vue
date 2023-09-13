<template>
  <div>
    <h1 class="to-yellow-400">home</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { definePageMeta } from 'nuxt/dist/pages/runtime';

definePageMeta({
  layout: "default",
});
export default defineComponent({
  setup () {
    return {}
  }
})
</script>

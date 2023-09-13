<template>
  <div class="profile">
    <a
      v-for="({ name, url }) in SOCIAL_LINKS"
      :key="name"
      :href="url"
      class="link"
      target="_blank"
      rel="noreferrer"
      :aria-label="name"
    >
      {{ name }}
    </a>
  </div>
</template>

<script>
import { SOCIAL_LINKS } from "../../constants/constants"; // Adjust the import path as needed

export default {
  data() {
    return {
      SOCIAL_LINKS,
    };
  },

};
</script>

<style scoped>
/* Define your scoped styles here if needed */
</style>



<style>
@import url('./profile.scss');
</style>
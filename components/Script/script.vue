<template>
  <div>
  </div>
</template>

<script>
import { GTAG } from "../../constants/constants";

export default {
  head() {
    return {
      // Include the Google Analytics scripts in the head section
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${GTAG}`,
          async: true,
        },
        {
          innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTAG}');
            `,
          type: "text/javascript",
          charset: "utf-8",
          strategy: "unsafe-inline",
        },
      ],
    };
  },
};
</script>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  data: () => ({
    darkMode: false,
  }),
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
  created() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.darkMode = true;
    }
  },
};
</script>

<template>
  <div :class="{ dark: darkMode }">
    <Navbar :darkMode="darkMode" :toggleDarkMode="toggleDarkMode" />
    <RouterView />
  </div>
</template>

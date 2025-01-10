<script>
import Navbar from "./components/Navbar.vue";
import Landing from "./views/Landing.vue";
export default {
  components: { Navbar, Landing },
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
    <Landing />
  </div>
</template>

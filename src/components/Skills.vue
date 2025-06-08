<script>
export default {
  data() {
    return {
      skills: {
        languages: [
          { name: "Javscript", icon: "javascript-original" },
          { name: "Typescript", icon: "typescript-original" },
          { name: "Dart", icon: "dart-original" },
          { name: "php", icon: "php-original" },
          { name: "Python", icon: "python-original" },
        ],
        technologies: [
          { name: "Angular", icon: "angular-original" },
          { name: "Vue", icon: "vuejs-original" },
          { name: "React", icon: "react-original" },
          { name: "Nest js", icon: "nestjs-original" },
          { name: "php Symfony", icon: "symfony-original" },
          { name: "Express", icon: "express-original" },
          { name: "Flutter", icon: "flutter-original" },
          { name: "Socket.io", icon: "socketio-original" },
        ],
        designAndTools: [
          { name: "Figma", icon: "figma-original" },
          { name: "Postman", icon: "postman-original" },
          { name: "Ant Design", icon: "antdesign-original" },
          {
            name: "PrimeNg",
            icon: "https://www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png",
          },
          { name: "Tailwind", icon: "tailwindcss-original" },
          { name: "Material UI", icon: "materialui-original" },
          { name: "Vuetify", icon: "vuetify-original" },
          { name: "Bootstrap", icon: "bootstrap-original" },
        ],
        databases: [
          { name: "MySql", icon: "mysql-original" },
          { name: "Microsoft Sql Server", icon: "microsoftsqlserver-original" },
          { name: "MongoDB", icon: "mongodb-original" },
        ],
        others: [
          { name: "Blender", icon: "blender-original" },
          { name: "Godot", icon: "godot-original" },
          { name: "Unreal Engine", icon: "unrealengine-original" },
          { name: "Unity", icon: "unity-original" },
        ],
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const skillsDivs = document.querySelectorAll(".skill-div");
      skillsDivs.forEach((skillDiv) => {
        const isInViewport = this.isElementInViewport(skillDiv);
        if (!skillDiv.classList.contains("animate__fadeInUp")) {
          skillDiv.classList.add("animate__fadeInUp", isInViewport);
          skillDiv.classList.remove("hidden", isInViewport);
        }
      });
    },
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
};
</script>

<template>
  <div class="max-w-(--breakpoint-xl) mx-auto px-6">
    <div
      v-for="(skillCategory, index) in Object.keys(skills)"
      :key="index"
      class="mb-24 skill-div animate__animated hidden"
      :style="{ 'animation-delay': 500 * ++index + 'ms' }"
    >
      <div
        class="w-full border-b border-gray-400 dark:border-gray-700 mb-4 pb-4"
      >
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ $t(skillCategory) }}
        </h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <a
          :href="`https://www.google.com/search?q=${skill.name}`"
          target="_blank"
          v-for="skill in skills[skillCategory]"
          class="bg-white dark:bg-slate-950 rounded-2xl flex items-center justify-center flex-col gap-4 p-6 w-40 h-40 duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <img
            class="w-1/2"
            :src="
              skill.name == 'PrimeNg'
                ? skill.icon
                : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${
                    skill.icon.split('-')[0]
                  }/${skill.icon}.svg`
            "
          />
          <h2
            class="text-2xl font-bold text-gray-900 lg:text-xl dark:text-gray-400 text-center"
          >
            {{ skill.name }}
          </h2>
        </a>
      </div>
    </div>
  </div>
</template>

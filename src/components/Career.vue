<script>
import rbk1 from "../assets/projects/rbk-1.jpg";
import rbk2 from "../assets/projects/rbk-2.jpg";

import moment from "moment/dist/moment";
import "moment/dist/locale/fr";

export default {
  mounted() {
    moment.locale(this.$i18n.locale);
  },
  watch: {
    "$i18n.locale"(lang) {
      moment.locale(lang);
    },
  },
  data() {
    return {
      $moment: moment,
      projects: [
        {
          date: new Date("08-01-2021"),
          title: "RBK Reboot camp",
          subtitle: "Fullstack Javascript certification",
          icons: [
            "devicon-javascript-plain colored",
            "devicon-typescript-plain colored",
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
          ],
          images: [rbk2, rbk1],
          text: "projects.rbk",
        },
        {
          date: new Date("02-01-2022"),
          title: "Adrissa",
          videos: [
            {
              url: "https://www.youtube.com/embed/mcAz0q1xKPU?si=ks6nonII_oedXymO",
            },
          ],
          subtitle: "Freelance project | Fullstack",
          icons: [
            "devicon-vuejs-plain colored",
            "devicon-express-original colored",
          ],
          images: [],
          text: "projects.adrissa",
        },
        {
          date: new Date("02-01-2022"),
          title: "Euromedi - Auditor",
          subtitle: "Freelance project | Front-end manager",
          icons: ["devicon-vuejs-plain colored"],
          images: [],
          text: "projects.euromedi",
        },
        {
          date: new Date("06-01-2022"),
          title: "UI/UX developer at Insight Plus",
          subtitle: "Indeterminate contract",
          icons: [
            "devicon-react-plain colored",
            "devicon-angularjs-plain colored",
            "devicon-figma-plain colored",
          ],
          images: [],
          text: "projects.insight",
        },
        {
          date: new Date("03-01-2023"),
          title: "ATAA",
          subtitle: "Freelance project | Fullstack",
          icons: [
            "devicon-flutter-plain colored",
            "devicon-nestjs-plain colored",
          ],
          images: [],
          text: "projects.ataa",
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="w-full bg-sky-50 md:bg-white dark:bg-slate-900 md:dark:bg-slate-950 dark:shadow-inner py-6 md:p-6"
  >
    <div class="max-w-screen-xl mx-auto px-6">
      <ol class="relative md:border-s border-slate-200 dark:border-gray-700">
        <li v-for="project in projects" class="md:ms-4 mb-16">
          <div
            class="absolute hidden md:block w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time
            class="mb-1 hidden md:block text-xl font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{
              $moment(project.date).locale($i18n.locale).format("MMM Y")
            }}</time
          >
          <div
            class="rounded-2xl bg-white md:bg-slate-200 dark:bg-slate-950 dark:md:bg-slate-900 w-full shadow md:m-6 md:flex-row flex flex-col"
          >
            <div
              class="flex dark:bg-slate-800 relative justify-center items-center object-cover w-full rounded-t-2xl h-96 md:60 md:w-1/3 md:rounded-none md:rounded-s-2xl overflow-hidden"
            >
              <img
                v-if="project.images[0]"
                class="w-full absolute"
                :src="project.images[0]"
                alt=""
              />
              <svg
                v-else
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path
                  d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                />
              </svg>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

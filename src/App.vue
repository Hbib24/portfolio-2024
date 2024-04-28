<template>
  <v-layout>
    <v-navigation-drawer v-model="menu" :width="80">
      <div class="nav-list">
        <v-tooltip offset="25" :text="$t('sections.about')">
          <template v-slot:activator="{ props }">
            <a
              v-bind="props"
              href="#about"
              @click.prevent="scrollTo('about')"
              :class="'nav-item'"
              ><div><v-icon icon="mdi-account"></v-icon></div>
            </a>
          </template>
        </v-tooltip>
        <v-tooltip offset="25" :text="$t('sections.skills')">
          <template v-slot:activator="{ props }">
            <a
              v-bind="props"
              href="#skills"
              @click.prevent="scrollTo('skills')"
              :class="'nav-item'"
              ><div><v-icon icon="mdi-check-circle"></v-icon></div>
            </a>
          </template>
        </v-tooltip>
        <v-tooltip offset="25" :text="$t('sections.background')">
          <template v-slot:activator="{ props }">
            <a
              v-bind="props"
              href="#background"
              @click.prevent="scrollTo('background')"
              class="nav-item"
              ><div><v-icon icon="mdi-briefcase"></v-icon></div>
            </a>
          </template>
        </v-tooltip>
        <v-tooltip offset="25" :text="$t('sections.contact')">
          <template v-slot:activator="{ props }">
            <a
              v-bind="props"
              href="#contact"
              @click.prevent="scrollTo('contact')"
              class="nav-item"
              ><div><v-icon icon="mdi-at"></v-icon></div>
            </a>
          </template>
        </v-tooltip>
      </div>
    </v-navigation-drawer>
    <v-main>
      <div class="container">
        <section id="about">
          <div
            class="animate__animated animate__fadeInDown"
            style="display: flex; justify-content: space-between"
          >
            <div class="section-title">
              <h1>{{ $t("sections.about") }}</h1>
              <v-divider class="border-opacity-100" :thickness="2"></v-divider>
            </div>
            <div>
              <v-select
                v-model="$i18n.locale"
                :items="[
                  { title: 'English', value: 'en' },
                  { title: 'Francais', value: 'fr' },
                ]"
                variant="underlined"
              ></v-select>
            </div>
          </div>
          <div class="bio">
            <div class="avatar animate__animated animate__flipInY">
              <div></div>
              <img alt="me" src="./assets/avatar.png" />
            </div>
            <div class="info animate__animated animate__fadeInRight">
              <div>HABIB BEKIR</div>
              <div v-html="$t('bio', [26])"></div>
            </div>
          </div>
        </section>
      </div>

      <canvas
        class="animate__animated animate__fadeInUp"
        id="animation"
      ></canvas>
      <section id="skills">
        <v-sheet>
          <div class="container">
            <div class="section-title white">
              <h1>{{ $t("sections.skills") }}</h1>
              <v-divider class="border-opacity-100" :thickness="2"></v-divider>
            </div>

            <v-row class="my-3" justify="center">
              <v-col v-for="n of skills" :key="n" cols="12" sm="6" md="3"
                ><v-card
                  :title="n.name"
                  :prepend-icon="'devicon devicon-' + n.icon"
                  variant="tonal"
                  hover
                  color="secondary"
                ></v-card
              ></v-col>
            </v-row>
          </div>
        </v-sheet>
      </section>

      <section id="background">
        <v-sheet color="secondary">
          <div class="container">
            <div class="section-title">
              <h1>{{ $t("sections.background") }}</h1>
              <v-divider class="border-opacity-100" :thickness="2"></v-divider>
            </div>

            <v-timeline
              class="my-5 hidden-sm-and-down"
              line-inset="12"
              side="end"
            >
              <v-timeline-item
                dot-color="#141218"
                v-for="(p, index) in projects"
                :key="index"
              >
                <template v-slot:opposite>
                  {{ $moment(p.date).locale($i18n.locale).format("MMM Y") }}
                </template>

                <v-card
                  :title="p.title"
                  :subtitle="p.subtitle"
                  class="project"
                  max-width="600"
                  :max-height="280"
                >
                  <template v-slot:append>
                    <div class="project-stack">
                      <v-tooltip
                        v-for="(icon, index) in p.icons"
                        :key="index"
                        :text="icon.split('-')[1]"
                      >
                        <template v-slot:activator="{ props }">
                          <i :class="icon" v-bind="props"></i>
                        </template>
                      </v-tooltip>
                    </div>
                  </template>

                  <v-card-text tag="p">
                    {{ $t(p.text) }}
                  </v-card-text>

                  <v-card-actions>
                    <ProjectDetails :moment="$moment" :p="p" />
                  </v-card-actions>
                </v-card>
              </v-timeline-item>
            </v-timeline>

            <!-- FOR MOBILE -->
            <div class="hidden-md-and-up py-5">
              <v-card
                v-for="(p, index) in projects"
                :key="index"
                :title="p.title"
                :subtitle="p.subtitle"
                class="project my-3"
                :max-height="280"
              >
                <template v-slot:append>
                  <div class="project-stack">
                    <v-tooltip
                      v-for="(icon, index) in p.icons"
                      :key="index"
                      :text="icon.split('-')[1]"
                    >
                      <template v-slot:activator="{ props }">
                        <i :class="icon" v-bind="props"></i>
                      </template>
                    </v-tooltip>
                  </div>
                </template>
                <v-card-text tag="p">
                  {{ p.text }}
                </v-card-text>
                <v-card-actions>
                  <ProjectDetails :moment="$moment" :p="p" />
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </v-sheet>
      </section>

      <section id="contact">
        <v-sheet>
          <div class="container">
            <div class="section-title white">
              <h1>Contact</h1>
              <v-divider class="border-opacity-100" :thickness="2"></v-divider>
            </div>
            <div class="container">
              <v-row class="my-3" justify="center">
                <v-col cols="12" sm="3">
                  <div>
                    <ul>
                      <li>Habib.bekir@gmail.com</li>
                      <li>+216 24 440 222</li>
                      <li>+216 99 760 334</li>
                    </ul>
                  </div>
                </v-col>
                <v-col class="text-center" cols="12" sm="3">
                  <ul style="list-style-type: none">
                    <li>
                      <i class="devicon-github-original"></i>
                      <a href="https://github.com/Hbib24" target="_blank"
                        >Github/Hbib24</a
                      >
                    </li>
                    <li>
                      <i class="devicon-linkedin-plain colored"></i>
                      <a
                        href="https://www.linkedin.com/in/hbib-bekir/"
                        target="_blank"
                        >In/hbib-bekir
                      </a>
                    </li>
                  </ul>
                </v-col>
                <v-col cols="12" sm="3">
                  <div
                    class="d-flex justify-center align-center"
                    style="flex-direction: column; gap: 12px"
                  >
                    <v-btn
                      max-width="200"
                      variant="tonal"
                      prepend-icon="mdi-download"
                      @click="download('en')"
                      >resume (EN)</v-btn
                    >
                    <v-btn
                      max-width="200"
                      variant="tonal"
                      prepend-icon="mdi-download"
                      @click="download('fr')"
                      >resume (FR)</v-btn
                    >
                  </div>
                </v-col>
              </v-row>

              <v-divider class="border-opacity-100" color="white"></v-divider>
              <div class="mt-3 text-white text-center w-100">
                This website was made with
                <v-tooltip location="top" text="愛"
                  ><template v-slot:activator="{ props }"
                    ><v-icon
                      v-bind="props"
                      color="pink"
                      icon="mdi-heart"
                    ></v-icon></template
                ></v-tooltip>
                by yours truly
              </div>
            </div>
          </div>
        </v-sheet>
      </section>
    </v-main>
  </v-layout>
</template>

<script>
import animate from "./bgWave";
import ProjectDetails from "./ProjectDetails.vue";
import moment from "moment/dist/moment";
import "moment/dist/locale/fr";

import rbk1 from "./assets/projects/rbk-1.jpg";
import rbk2 from "./assets/projects/rbk-2.jpg";

import pdfFr from "./assets/Habib-Bekir-fr.pdf";
export default {
  components: { ProjectDetails },
  watch: {
    "$i18n.locale"(lang) {
      moment.locale(lang);
    },
  },
  data() {
    return {
      $moment: moment,
      menu: true,
      skills: [
        { name: "Javscript", icon: "javascript-plain" },
        { name: "Typescript", icon: "typescript-plain" },
        { name: "Angular 2+", icon: "angularjs-plain" },
        { name: "Vue", icon: "vuejs-plain" },
        { name: "React", icon: "react-plain" },
        { name: "Nest", icon: "nestjs-plain" },
        { name: "Express", icon: "express-original" },
        { name: "Flutter", icon: "flutter-plain" },
        { name: "Figma", icon: "figma-plain" },
        { name: "MySql", icon: "mysql-plain" },
        { name: "MongoDB", icon: "mongodb-plain" },
      ],
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
          images: [rbk1, rbk2],
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
          text: "projects.adrissa",
        },
        {
          date: new Date("02-01-2022"),
          title: "Euromedi - Auditor",
          subtitle: "Freelance project | Front-end manager",
          icons: ["devicon-vuejs-plain colored"],
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
          text: "projects.ataa",
        },
      ],
    };
  },
  methods: {
    scrollTo(id) {
      if (id == "about") return window.scrollTo({ behavior: "smooth", top: 0 });
      const ele = document.getElementById(id);
      ele.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    download(lang) {
      const a = document.createElement("a");
      a.href = pdfFr;
      a.target = "_blank";
      a.download = "Habib.Bekir.pdf";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
  beforeMount() {
    this.menu = window.innerWidth > 1280;
  },
  mounted() {
    animate({ el: "animation" });

    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.scrollY / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );

    document.querySelectorAll("#skills .v-card").forEach((el) => {
      el.addEventListener("mouseenter", () =>
        el.querySelector(".devicon").classList.add("colored")
      );
      el.addEventListener("mouseleave", () =>
        el.querySelector(".devicon").classList.remove("colored")
      );
    });

    const elements = document.getElementsByClassName("devicon");
    Array(elements.length)
      .fill()
      .forEach((e, i) => {
        elements[i].classList.remove("mdi");
      });
  },
};
</script>

<style>
p {
  max-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

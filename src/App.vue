<template>
  <v-layout>
    <v-navigation-drawer v-model="menu" :width="80">
      <div class="nav-list">
        <v-tooltip offset="25" text="About">
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
        <v-tooltip offset="25" text="Skills">
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
        <v-tooltip offset="25" text="Background">
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
        <v-tooltip offset="25" text="Contact">
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
          <div style="display: flex; justify-content: space-between">
            <div class="section-title">
              <h1>About</h1>
              <v-divider class="border-opacity-100" :thickness="2"></v-divider>
            </div>
            <div>
              <v-select
                v-model="lang"
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
              <div>
                Devices should feel personal. Individual choices for device
                color and form are brought to life through software. Dynamic
                color extraction imbues the system with a personal aesthetic,
                while changes in shape and lighting combine to create a
                holistic, resonant experience.
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="skills">
        <v-sheet>
          <div class="container">
            <div class="section-title white">
              <h1>Skills</h1>
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
              <h1>Background</h1>
              <v-divider class="border-opacity-100" :thickness="2"></v-divider>
            </div>

            <v-timeline align="start" line-inset="12" side="end">
              <v-timeline-item v-for="(p, index) in projects" :key="index">
                <template v-slot:opposite>
                  {{ moment(p.date).locale(lang).format("MMM Do Y") }}
                </template>

                <v-card
                  :title="p.title"
                  :subtitle="p.subtitle"
                  class="project"
                  max-width="600"
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
                  <v-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    seddo eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.</v-card-text
                  >
                  <v-card-actions>
                    <v-btn prepend-icon="mdi-plus" variant="tonal">
                      learn more
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-sheet>
      </section>

      <canvas
        class="animate__animated animate__fadeInUp"
        id="animation"
      ></canvas>
    </v-main>
  </v-layout>
</template>

<script>
import animate from "./animation";
import moment from "moment";
import "moment/locale/fr";

export default {
  data() {
    return {
      lang: "en",
      moment: moment,
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
          date: new Date(),
          title: "RBK Reboot camp",
          subtitle: "Fullstack Javascript certification",
          icons: [
            "devicon-javascript-plain colored",
            "devicon-typescript-plain colored",
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
          ],
        },
        {
          date: new Date(),
          title: "Adrissa",
          subtitle: "Freelance project | Fullstack",
          icons: [
            "devicon-vuejs-plain colored",
            "devicon-express-original colored",
          ],
        },
        {
          date: new Date(),
          title: "Euromedi - Auditor",
          subtitle: "Freelance project | Front-end manager",
          icons: ["devicon-vuejs-plain colored"],
        },
        {
          date: new Date(),
          title: "UI/UX developer at Insight Plus",
          subtitle: "Indeterminate contract",
          icons: [
            "devicon-react-plain colored",
            "devicon-angularjs-plain colored",
          ],
        },
        {
          date: new Date(),
          title: "ATAA",
          subtitle: "Freelance project | Fullstack",
          icons: [
            "devicon-flutter-plain colored",
            "devicon-nestjs-plain colored",
          ],
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

    const elements = document.getElementsByClassName("devicon");
    Array(elements.length)
      .fill()
      .forEach((e, i) => {
        elements[i].classList.remove("mdi");
      });
  },
};
</script>

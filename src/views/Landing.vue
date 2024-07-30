<script>
import Career from "../components/Career.vue";
import Skills from "../components/Skills.vue";
export default {
  components: { Skills, Career },
  data() {
    return {
      scroll: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div
    class="dark:bg-slate-950 md:bg-slate-200 bg-white md:dark:bg-slate-900 overflow-hidden h-full"
  >
    <div class="relative">
      <section class="h-dvh md:p-6 overflow-hidden">
        <div
          class="md:rounded-2xl h-full w-full bg-white dark:bg-slate-950 shadow-inner p-6 overflow-hidden"
        >
          <div
            :style="{ transform: `translateY(${scroll * 0.5}px)` }"
            class="flex flex-col h-full items-center justify-center"
          >
            <h1
              class="mb-4 text-4xl tracking-widest font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate__animated animate__fadeIn"
            >
              Habib Bekir
            </h1>
            <div
              class="flex flex-wrap justify-center items-center gap-6 animate__animated animate__fadeInDown"
              style="animation-delay: 500ms"
            >
              <p
                class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              >
                Fullstack
              </p>
              <div
                class="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-400"
              ></div>
              <p
                class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              >
                Web
              </p>
              <div
                class="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-400"
              ></div>
              <p
                class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              >
                Mobile
              </p>
            </div>
          </div>
        </div>
        <!-----------------------
              Devices 
      ------------------------->
        <div
          id="devices"
          :style="{ transform: `translateY(${scroll * 0.7}px)` }"
          class="absolute z-10 flex md:gap-16 gap-8 mx-auto items-center justify-center -bottom-20 md:-bottom-60 -left-1/2 -right-1/2"
        >
          <!-- rest of the code -->
          <div
            class="animate__animated animate__fadeInUp z-10"
            style="animation-delay: 600ms"
          >
            <div
              class="relative mx-auto border-slate-900 dark:border-slate-900 bg-slate-900 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"
            >
              <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
                  class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
                  class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl"
                  alt=""
                />
              </div>
            </div>
            <div
              class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"
            ></div>
            <div
              class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"
            ></div>
          </div>
          <div
            style="animation-delay: 300ms"
            class="relative animate__animated animate__fadeInUp border-slate-900 dark:border-slate-900 bg-slate-900 border-[8px] md:border-[14px] rounded-[2rem] md:rounded-[2.5rem] md:h-[600px] md:max-w-[300px] h-[300px] max-w-[150px]"
          >
            <div
              class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[10px] md:-start-[17px] top-[72px] rounded-s-lg"
            ></div>
            <div
              class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[10px] md:-start-[17px] top-[124px] rounded-s-lg"
            ></div>
            <div
              class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[10px] md:-start-[17px] top-[178px] rounded-s-lg"
            ></div>
            <div
              class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[10px] md:-end-[17px] top-[142px] rounded-e-lg"
            ></div>
            <div
              class="rounded-[1.7rem] md:rounded-[2rem] overflow-hidden w-[125px] md:w-[272px] md:h-[572px] w-full h-[285px] bg-white dark:bg-gray-800"
            >
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                class="dark:hidden md:w-[272px] md:h-[572px] h-[285px]"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                class="hidden dark:block md:w-[272px] md:h-[572px] h-[285px]"
                alt=""
              />
            </div>
          </div>
          <div
            class="animate__animated animate__fadeInUp"
            style="animation-delay: 600ms"
          >
            <div
              class="relative mx-auto border-slate-900 dark:border-slate-900 bg-slate-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"
            >
              <div
                class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                  class="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                  class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                  alt=""
                />
              </div>
            </div>
            <div
              class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]"
            >
              <div
                class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section id="about" class="w-full relative pt-6 z-20">
      <div
        class="overflow-hidden w-full bg-sky-50 md:bg-white dark:bg-slate-900 md:dark:bg-slate-950 dark:shadow-inner p-6"
      >
        <div class="flex justify-center">
          <div
            class="max-w-screen-xl text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-400 py-10 md:py-20"
            v-html="$t('bio')"
          ></div>
        </div>
      </div>
    </section>

    <section
      id="skills"
      class="w-full py-10 md:py-20 relative z-20 dark:bg-slate-950 md:bg-slate-200 bg-white md:dark:bg-slate-900"
    >
      <Skills />
    </section>

    <section id="career" class="w-full z-20 relative">
      <Career />
    </section>

    <section
      id="contact"
      class="w-full z-20 relative dark:bg-slate-950 md:bg-slate-200 bg-white md:dark:bg-slate-900 p-6"
    >
      <div class="flex flex-wrap justify-around">
        <div class="flex flex-col gap-3">
          <div>Habib.bekir@gmail.com</div>
          <div>+216 24 440 222</div>
          <div>+216 99 760 334</div>
        </div>
      </div>
    </section>
  </div>
</template>

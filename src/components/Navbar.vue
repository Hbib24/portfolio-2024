<script>
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
export default {
  props: { toggleDarkMode: Function, darkMode: Boolean },
  data() {
    return {
      logoDark,
      logoLight,
    };
  },
  methods: {
    isInView(id) {
      const ele = document.getElementById(id);
      return ele?.getBoundingClientRect().top < window.innerHeight;
    },
    scrollTo(id) {
      const ele = document.getElementById(id);
      ele?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
  mounted() {
    document.addEventListener("scroll", (evt) => {
      // nav height + padding
      if (window.scrollY > 72 + 24) {
        document
          .getElementById("navbar-container")
          .classList.remove("md:rounded-full");
        document.getElementById("navbar").classList.remove("md:p-6");
        document.getElementById("navbar").classList.add("shadow-sm");
      } else {
        document
          .getElementById("navbar-container")
          .classList.add("md:rounded-full");
        document.getElementById("navbar").classList.add("md:p-6");
        document.getElementById("navbar").classList.remove("shadow-sm");
      }
    });
  },
};
</script>

<template>
  <nav id="navbar" class="fixed w-full md:p-6 z-40 duration-100">
    <div
      id="navbar-container"
      class="bg-white dark:bg-slate-950 md:rounded-full"
    >
      <div
        class="max-w-(--breakpoint-xl) flex flex-wrap items-center justify-between mx-auto py-4 px-6"
      >
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <div>
            <img :src="logoDark" class="h-10 dark:hidden block" alt="Logo" />
            <img :src="logoLight" class="h-10 hidden dark:block" alt="Logo" />
          </div>
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Habib Bekir</span
          >
        </a>
        <button
          data-drawer-target="drawer-top"
          data-drawer-show="drawer-top"
          data-drawer-placement="top"
          aria-controls="drawer-top"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          aria-hidden="true"
          id="drawer-top"
          class="fixed top-0 left-0 right-0 z-40 w-full transition-transform -translate-y-full"
          aria-labelledby="drawer-top-label"
        >
          <div
            class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <a
              href="#about"
              @click.prevent="scrollTo('about')"
              aria-current="true"
              class="block w-full p-4 border-b border-gray-200 cursor-pointer hover:bg-white hover:text-blue-700 focus:outline-hidden focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              {{ $t("sections.about") }}
            </a>
            <a
              href="#skills"
              @click.prevent="scrollTo('skills')"
              class="block w-full p-4 border-b border-gray-200 cursor-pointer hover:bg-white hover:text-blue-700 focus:outline-hidden focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              {{ $t("sections.skills") }}
            </a>
            <a
              href="#career"
              @click.prevent="scrollTo('career')"
              class="block w-full p-4 border-b border-gray-200 cursor-pointer hover:bg-white hover:text-blue-700 focus:outline-hidden focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              {{ $t("sections.background") }}
            </a>
            <a
              href="#contact"
              @click.prevent="scrollTo('contact')"
              class="block w-full p-4 border-b border-gray-200 cursor-pointer hover:bg-white hover:text-blue-700 focus:outline-hidden focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              {{ $t("sections.contact") }}
            </a>
            <label
              class="w-full p-4 flex items-center cursor-pointer dark:border-gray-600"
            >
              <input
                type="checkbox"
                :checked="darkMode"
                @change="toggleDarkMode"
                class="sr-only peer"
              />
              <div
                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-hidden peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:!bg-blue-600"
              ></div>
              <span
                class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                ><svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </label>
          </div>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            class="flex flex-col ring-gray-600 border-solid border-2 md:border-transparent items-center md:p-0 p-4 font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li>
              <a
                href="#about"
                @click.prevent="scrollTo('about')"
                :class="`${
                  isInView('about') ? 'text-blue-700' : ''
                } block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`"
                aria-current="page"
                >{{ $t("sections.about") }}</a
              >
            </li>
            <li>
              <a
                href="#skills"
                @click.prevent="scrollTo('skills')"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >{{ $t("sections.skills") }}</a
              >
            </li>
            <li>
              <a
                href="#career"
                @click.prevent="scrollTo('career')"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >{{ $t("sections.background") }}</a
              >
            </li>
            <li>
              <a
                href="#contact"
                @click.prevent="scrollTo('contact')"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >{{ $t("sections.contact") }}</a
              >
            </li>
            <li>
              <label class="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  :checked="darkMode"
                  @change="toggleDarkMode"
                  class="sr-only peer"
                />
                <div
                  class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
                ></div>
                <span
                  class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                  ><svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

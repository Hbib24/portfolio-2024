<script>
export default {};
</script>

<template>
  <div class="bg-slate-200 dark:bg-slate-900">
    <section class="h-dvh w-full md:p-6">
      <div
        class="rounded-2xl h-full overflow-hidden relative w-full bg-sky-50 dark:bg-slate-950 shadow-inner p-6"
      >
        <div class="flex flex-col h-full items-center justify-center">
          <h1
            class="mb-4 text-4xl tracking-widest font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate__animated animate__fadeInDown"
          >
            Habib Bekir
          </h1>
          <div
            class="flex flex-wrap justify-center items-center gap-6 animate__delay-1s animate__animated animate__fadeInDown"
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

          <!-- Devices -->
          <div class="hidden lg:block">
            <div
              class="animate__animated animate__fadeInLeft animate__delay-1s absolute left-10 bottom-20 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl"
            >
              <div
                class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"
              ></div>
              <div
                class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"
              ></div>
              <div
                class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"
              ></div>
              <div
                class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"
              ></div>
              <div
                class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                  class="dark:hidden w-[272px] h-[572px]"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                  class="hidden dark:block w-[272px] h-[572px]"
                  alt=""
                />
              </div>
            </div>

            <div
              class="absolute end-8 -bottom-10 animate__animated animate__fadeInRight animate__delay-1s"
            >
              <div
                class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

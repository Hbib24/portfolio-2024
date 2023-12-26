<template>
  <v-dialog :max-width="1100">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" prepend-icon="mdi-plus" variant="tonal">
        learn more
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <vueper-slides autoplay fade>
        <vueper-slide v-for="(img, i) of p.images" :key="i" :image="img" />
      </vueper-slides>
      <v-card :title="p.title" :subtitle="p.subtitle" :text="p.text">
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

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            prepend-icon="mdi-close"
            variant="tonal"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  props: { p: Object },
};
</script>

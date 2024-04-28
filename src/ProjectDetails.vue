<template>
  <v-dialog :max-width="1100">
    <template v-slot:activator="{ props }">
      <v-btn
        class="hidden-sm-and-down"
        v-bind="props"
        prepend-icon="mdi-plus"
        variant="tonal"
      >
        {{ $t("buttons.learnMore") }}
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <vueper-slides>
        <template v-if="p.videos?.length">
          <vueper-slide v-for="(vid, i) of p.videos" :key="i" :video="vid" />
        </template>
        <template v-if="p.images?.length">
          <vueper-slide v-for="(img, i) of p.images" :key="i" :image="img" />
        </template>
      </vueper-slides>
      <v-card
        :title="p.title"
        :subtitle="`${p.subtitle} - ${moment(p.date).format('MMM Do Y')}`"
        :text="$t(p.text)"
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

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :text="$t('buttons.close')"
            prepend-icon="mdi-close"
            variant="tonal"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  <v-bottom-sheet fullscreen>
    <template v-slot:activator="{ props }">
      <v-btn
        class="hidden-md-and-up"
        v-bind="props"
        prepend-icon="mdi-plus"
        variant="tonal"
      >
        {{ $t("buttons.learnMore") }}
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <vueper-slides>
        <template v-if="p.videos?.length">
          <vueper-slide v-for="(vid, i) of p.videos" :key="i" :video="vid" />
        </template>
        <template v-if="p.images?.length">
          <vueper-slide v-for="(img, i) of p.images" :key="i" :image="img" />
        </template>
      </vueper-slides>
      <div class="card-container">
        <v-card
          height="100%"
          :title="p.title"
          :subtitle="`${p.subtitle} - ${moment(p.date).format('MMM Do Y')}`"
        >
          <v-card-text>
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
            <p class="mt-3">
              {{ $t(p.text) }}
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              :text="$t('buttons.close')"
              prepend-icon="mdi-close"
              variant="tonal"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </template>
  </v-bottom-sheet>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  props: { p: Object, moment: Function },
};
</script>

<style lang="scss">
.v-bottom-sheet .vueperslides__parallax-wrapper {
  height: 250px;
}
.card-container {
  height: 100%;
}
</style>

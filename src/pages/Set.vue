<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="main-panel"
      ><div>
        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Галерея" color="primary" @click="carousel = true" />
        </div>
        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Вид" color="primary" @click="card = true" />
        </div>
        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Громкость" color="primary" @click="sliders = true" />
        </div>
      </div>
    </q-card>
    <q-dialog v-model="carousel">
      <q-carousel
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
        control-color="primary"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        height="200px"
        class="bg-white shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <q-icon name="style" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon name="live_tv" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon name="layers" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap flex-center">
          <q-icon name="terrain" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>

    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img src="~assets/p1.webp" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Проект 1</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1"></div>
          <div class="text-caption text-grey">Описание проекта</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="sliders">
      <q-card style="width: 300px" class="q-px-sm q-pb-md">
        <q-card-section>
          <div class="text-h6">Volumes</div>
        </q-card-section>

        <q-item-label header>Media volume</q-item-label>
        <q-item dense>
          <q-item-section avatar>
            <q-icon name="volume_up" />
          </q-item-section>
          <q-item-section>
            <q-slider color="teal" v-model="slideVol" :step="0" />
          </q-item-section>
        </q-item>

        <q-item-label header>Alarm volume</q-item-label>
        <q-item dense>
          <q-item-section avatar>
            <q-icon name="alarm" />
          </q-item-section>
          <q-item-section>
            <q-slider color="teal" v-model="slideAlarm" :step="0" />
          </q-item-section>
        </q-item>

        <q-item-label header>Ring volume</q-item-label>
        <q-item dense>
          <q-item-section avatar>
            <q-icon name="vibration" />
          </q-item-section>
          <q-item-section>
            <q-slider color="teal" v-model="slideVibration" :step="0" />
          </q-item-section>
        </q-item>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      carousel: ref(false),
      card: ref(false),
      sliders: ref(false),

      slide: ref(1),
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",

      stars: ref(3),

      slideVol: ref(39),
      slideAlarm: ref(56),
      slideVibration: ref(63),
    };
  },
};
</script>
<style lang="scss" scoped>
.main-panel {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1em;
  padding: 1em;
  border: 1px;
  border-radius: 10px;
}

.cow-panel {
  flex-direction: cow;
}
.main-img {
  margin: 2px;
  border-radius: 30px;
}

.label fl_l {
  font: 12px/14px sans-serif;
}
</style>

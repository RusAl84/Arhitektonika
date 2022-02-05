<template>
  <q-card>
    <q-card-section> Login </q-card-section>
    <q-card-action>
      <q-btn flat dense style="border: 1px"></q-btn>
    </q-card-action>
  </q-card>

  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>

<template>
  <q-page class="flex flex-left">
    <q-card class="main-panel">
      <q-card-section>
        <img
          src="~assets/arh_photo.jpg"
          style="width: 400px; height: 400px; bordered: 2px"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style lang="scss" scoped>
.main-panel {
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin: 10;
}
</style>

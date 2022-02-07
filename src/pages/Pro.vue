<template>
  <q-page class="flex flex-block" v-if="userName">
    <q-card class="main-panel">
      <div>
        <div>
          <q-card-section
            ><h5 style="margin: 0; padding: 0">Проекты:</h5>
          </q-card-section>
        </div>
        <div style="display: flex; flex-direction: row; flex-wrap: wrap">
          <div style="display: flex; flex-direction: column; padding: 10px">
            <q-img
              src="~assets/p1.webp"
              style="width: 200px; height: 200px; bordered: 2px"
            />
            <q-btn
              href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
              target="_blank"
              push
              color="primary"
              class="q-mb-md"
              >Открыть проект</q-btn
            >
          </div>
          <div style="display: flex; flex-direction: column; padding: 10px">
            <q-img
              src="~assets/p2.webp"
              style="width: 200px; height: 200px; bordered: 2px"
            />
            <q-btn
              p
              href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
              target="_blank"
              ush
              color="primary"
              class="q-mb-md"
              >Открыть проект</q-btn
            >
          </div>
          <div style="display: flex; flex-direction: column; padding: 10px">
            <q-img
              src="~assets/p3.webp"
              style="width: 200px; height: 200px; bordered: 2px"
            />
            <q-btn
              href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
              target="_blank"
              push
              color="primary"
              class="q-mb-md"
              >Открыть проект</q-btn
            >
          </div>
          <div style="display: flex; flex-direction: column; padding: 10px">
            <q-img
              src="~assets/p4.webp"
              style="width: 200px; height: 200px; bordered: 2px"
            />
            <q-btn
              href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
              target="_blank"
              push
              color="primary"
              class="q-mb-md"
              >Открыть проект</q-btn
            >
          </div>
          <div style="display: flex; flex-direction: column; padding: 10px">
            <q-img
              src="~assets/p5.webp"
              style="width: 200px; height: 200px; bordered: 2px"
            />
            <q-btn
              href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
              target="_blank"
              push
              color="primary"
              class="q-mb-md"
              >Открыть проект</q-btn
            >
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
  <q-page class="flex flex-block" v-if="!userName">
    <h5>Необходима авторизация, пожалуйста авторизируйтесь</h5>
  </q-page>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default {
  name: "IndexPage",
  setup() {
    const $store = useStore();
    const userName = computed({
      get: () => $store.state.mes.userName,
      set: (val) => {
        $store.commit("mes/updateUserNameState", val);
      },
    });
    return {
      $store,
      userName,
    };
  },
};
</script>
<style lang="scss" scoped>
.main-panel {
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin: 10;
}
</style>

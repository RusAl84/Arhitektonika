<template>
  <q-page class="flex flex-block" v-if="userName">
    <q-card class="main-panel">
      <div class="main-panel">
        <div>
          <q-card-section>
            <img
              src="~assets/arh_photo.jpg"
              style="width: 350px; height: 350px"
              class="main-img"
            />
          </q-card-section>
        </div>
        <div class="cow-panel">
          <q-card-section>
            <q-card flat bordered>
              <q-card-section
                ><b>Фамилия имя отчество:</b> Белова Полина</q-card-section
              >
              <q-card-section style="max-width: 560px"
                ><b>Образование: </b>Национальный исследовательский Московский
                государственный строительный университет (2026)
              </q-card-section>
              <q-card-section
                ><b>Дата рождения:</b> 27 декабря 2000 г.
              </q-card-section>
              <q-card-section><b>Место работы:</b> нет </q-card-section>
            </q-card>
          </q-card-section>
          <q-card-section
            flat
            bordered
            style="display: flex; justify-content: space-between"
          >
            <q-btn color="primary">Изменить фото</q-btn>
            <q-btn
              color="primary"
              href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
              target="_blank"
              >Изменить данные</q-btn
            >
          </q-card-section>
        </div>
      </div>
    </q-card>

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

    <q-card class="main-panel">
      <div>
        <div>
          <q-card-section
            ><h5 style="margin: 0; padding: 0">Мои статьи:</h5>
          </q-card-section>
        </div>
        <div>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
                >ЧТО ТАКОЕ АРХИТЕКТУРНЫЙ ПРОЕКТ?</a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://catalog-plans.ru/article/encyclopedia-of-construction/arhitekturnyj-proekt"
                >В помощь архитектору</a
              >
            </li>
          </ul>
        </div>
      </div>
    </q-card>
  </q-page>
  <q-page class="flex flex-block" v-if="!userName">
    <h5>Необходима авторизация, пожалуйста авторизируйтесь</h5>
  </q-page>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const $store = useStore();
    const userName = computed({
      get: () => $store.state.mes.userName,
      set: (val) => {
        $store.commit("mes/updateUserNameState", val);
      },
    });
    let slide = ref(1);
    return {
      slide,
      $store,
      userName,
    };
  },
});
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

<template>
  <q-page class="flex flex-block">
    <q-card class="main-panel">
      <q-card-section>
        <img
          src="~assets/arh_photo.jpg"
          style="width: 400px; height: 400px"
          class="main-img"
        />
      </q-card-section>

      <q-card-section>
        <q-card>
          <div class="profile_info profile_info_short">
            <div class="clear_fix profile_info_row">
              <h6 class="label fl_l">День рождения:</h6>
              <div class="labeled">
                <a
                  href="/search?c[section]=people&amp;c[bday]=27&amp;c[bmonth]=12"
                  >27 декабря</a
                >
                <a href="/search?c[section]=people&amp;c[byear]=1984"
                  >1984 г.</a
                >
              </div>
            </div>
            <div class="clear_fix profile_info_row">
              <h3 class="label fl_l">Город:</h3>
              <div class="labeled">
                <a
                  href="/search?c[name]=0&amp;c[section]=people&amp;c[country]=1&amp;c[city]=1"
                  >Москва</a
                >
              </div>
            </div>
            <div class="clear_fix profile_info_row">
              <h3 class="label fl_l">Семейное положение:</h3>
              <div class="labeled">
                <a
                  href="/search?c[name]=0&amp;c[section]=people&amp;c[status]=4"
                  >женат</a
                >
              </div>
            </div>
            <div class="clear_fix profile_info_row">
              <h3 class="label fl_l">Образование:</h3>
              <div class="labeled">МГУПИ '07 ></div>
            </div>
            <div class="profile_more_info">
              <a
                class="profile_more_info_link"
                onclick="Profile.toggleInfo(this)"
              >
                <span class="profile_label_more"
                  >Показать подробную информацию</span
                >
                <span class="profile_label_less"
                  >Скрыть подробную информацию</span
                >
              </a>
            </div>
          </div></q-card
        >
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
  margin: 1em;
  padding: 1em;
  border: 1px;
  border-radius: 30px;
}
.main-img {
  margin: 1em;
  padding: 1em;
  border: 10px;
  border-radius: 120px 20px 120px 20px;
}

.label fl_l {
  font: 12px/14px sans-serif;
}
</style>

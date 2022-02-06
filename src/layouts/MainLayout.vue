<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="display: flex; align-items: center" class="toolbar">
        <q-btn flat class="q-mr-sm" @click="toggleLeftDrawer">
          <LogoIcon color="white" />
        </q-btn>

        <!--<q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />-->

        <div style="display: flex; flex-direction: column" class="full-width">
          <div style="display: flex; align-items: center">
            <q-toolbar-title>
              {{ pkg.title }}
            </q-toolbar-title>

            <q-chip dark color="secondary" v-if="login" class="q-mr-sm">{{
              login
            }}</q-chip>
            <q-input
              item-aligned
              dense
              dark
              flat
              standout
              bottom-slots
              model-value=""
              label="Поиск"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
            <q-btn
              flat
              round
              icon="login"
              @click="prompt = true"
              class="q-mr-sm"
            ></q-btn>
            <!--<div>v{{ pkg.version }}</div>-->
          </div>
          <div style="display: flex">
            <rss class="q-mb-sm" />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Ссылки </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Введите имя пользователя</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="login"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Пароль:</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense autofocus @keyup.enter="prompt = false" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отмена" v-close-popup />
          <q-btn flat label="Войти" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import pkg from "../../package.json";
import EssentialLink from "components/EssentialLink.vue";
import Rss from "components/Rss.vue";
import LogoIcon from "components/LoginIcon.vue";

const linksList = [
  {
    title: "Мой профиль",
    icon: "mdi-account", // Префикс "mdi-" говорит о том, что мы используем иконки с сайта materialdesignicons.com
    link: "/",
  },
  {
    title: "Мои проекты",
    icon: "code",
    link: "/",
  },
  {
    title: "Справочник",
    icon: "help",
    link: "/",
  },
  {
    title: "Сообщения",
    icon: "record_voice_over",
    link: "/",
  },
  {
    title: "Настройки",
    icon: "rss_feed",
    link: "/",
  },
  {
    title: "О проекте",
    icon: "favorite",
    link: "/about",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    LogoIcon,
    Rss,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      pkg,
      essentialLinks: linksList,
      leftDrawerOpen,
      prompt: ref(false),
      login: ref(""),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.toolbar {
  display: flex;
  flex-direction: row;
}
</style>

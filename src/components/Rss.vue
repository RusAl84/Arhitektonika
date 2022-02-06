<template>
  <div class="rss">
    <q-icon name="rss_feed" class="q-mr-sm" color="secondary"></q-icon>
    <span
      class="line ellipsis"
      v-for="(item, i) in items"
      :key="i"
      :class="{ active: i === activeIndex }"
    >
      <a class="link" :href="item.link" target="_blank">{{ item.text }}</a>
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RssComponent",
  components: {},
  data() {
    return {
      activeIndex: 3,
      timer: null,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [
        {
          text: "04.02.22. ТОП-10 эпатажных инсталляций и арт-объектов",
          link: "https://architime.ru/",
        },
        {
          text: "02.02.22. Конкурсы и победители. Девайс для борьбы с паническими атаками и взгляд изнутри на кухню Lexus Design Award",
          link: "https://architime.ru/",
        },
        {
          text: "01.02.22. Виртуальная выставка с коллекцией частных работ Алвара Аалто",
          link: "https://architime.ru/",
        },
        {
          text: "31.01.22. Стальные пирамиды от Foster + Partners - в Китае открылся художественный музей с необычной крышей",
          link: "https://architime.ru/",
        },
        {
          text: '28.01.22. На Artplay открылась Галерея "Назаро" - домашние кинотеатры и умные дома',
          link: "https://architime.ru/",
        },
        {
          text: "27.01.22. Конкурсы и победители. Экополис на Сахалине от IND architects",
          link: "https://architime.ru/",
        },
        {
          text: '27.01.22. Архитектурный проект "Море за поворотом"-2022 объявляет набор участников!',
          link: "https://architime.ru/",
        },
      ],
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.activeIndex++;
      if (this.activeIndex >= this.items.length) this.activeIndex = 0;
    }, 10000);
  },
  unmounted() {
    clearInterval(this.timer);
  },
});
//
</script>

<style scoped lang="scss">
.rss {
  display: relative;
  height: 1em;
}

.line {
  position: absolute;
  opacity: 0;
  transform: translateX(20px);
  visibility: hidden;
  transition: 0.3s ease-out;
}

.active {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.link {
  text-decoration: none;
  color: $secondary;
}
</style>

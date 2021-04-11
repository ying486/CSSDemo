<template>
  <div class="home">
    <Card
      v-for="(item, index) in demoList"
      :key="index"
      :title="item.title"
      :img="item.img"
      @click="$router.push('login')"
    />
  </div>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      demoList: [
        {
          title: "login",
          img: "logo.png",
          routeName: "login",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  padding: 10px;
  background-color: #f7f7f7;
}
</style>
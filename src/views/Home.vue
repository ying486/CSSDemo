<template>
  <div class="home">
    <Card
      class="card"
      v-for="(item, index) in demoList"
      :key="index"
      :title="item.title"
      :img="item.img"
      @click="$router.push(item.routeName)"
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
          img: "login.png",
          routeName: "login",
        },
        {
          title: "loading",
          img: "loading.png",
          routeName: "loading",
        },
        {
          title: "video-cube",
          img: "loading.png",
          routeName: "video-cube",
        },
        {
          title: "button-A",
          img: "button-A.png",
          routeName: "button-A",
        },
        {
          title: "button-B",
          img: "button-B.png",
          routeName: "button-B",
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
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .card {
    margin: 20px 20px;
  }
}
</style>
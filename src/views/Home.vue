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
          title: "login_A",
          img: "login_A.png",
          routeName: "login_A",
        },
        {
          title: "loading_A",
          img: "loading_A.png",
          routeName: "loading_A",
        },
        {
          title: "video-cube",
          img: "video-cube.png",
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
        {
          title: "button-C",
          img: "button-C.png",
          routeName: "button-C",
        },
        {
          title: "loading_B",
          img: "loading_B.png",
          routeName: "loading_B",
        },
        {
          title: "gradient_A",
          img: "gradient_A.png",
          routeName: "gradient_A",
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
    margin: 0 20px;
  }
}
</style>
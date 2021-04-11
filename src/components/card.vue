<template>
  <div class="card-container">
    <img :src="require('@/assets/images/' + img)" />
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "card",
  components: {},
  props: {
    title: {
      String,
      default: "name",
    },
    img: {
      String,
      default: "logo.png",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.card-container {
  width: 200px;
  height: 250px;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgb(196, 196, 196);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 100px;
  }
  p {
    color: #666;
  }
}
</style>
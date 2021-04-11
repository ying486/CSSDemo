<template>
  <router-view />
  <img
    v-if="$route.name !== 'Home'"
    class="to-home"
    src="@/assets/images/back.png"
    @click="onBack"
  />
</template>
<script>
export default {
  methods: {
    onBack() {
      this.$router.back(-1);
    },
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
}

#app {
  height: 100vh;
}

.to-home {
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>

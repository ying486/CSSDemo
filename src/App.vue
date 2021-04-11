<template>
  <router-view />
  <button v-if="$route.name !== 'Home'" class="to-home" @click="onBack">
    back
  </button>
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
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>

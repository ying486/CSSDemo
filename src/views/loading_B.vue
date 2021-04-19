<template>
  <div class="loading_B"></div>
</template>

<script>
export default {
  name: "loading_B",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss'>
.loading_B {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(white, black);
  --mask: radial-gradient(farthest-side, transparent 75%, black 76%);
  -webkit-mask-image: var(--mask);
  mask-image: var(--mask);
  animation: rotate 3s infinite linear;
}

@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}
</style>
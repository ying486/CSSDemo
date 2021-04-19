<template>
  <div class="loading_A">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loading_A",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss'>
.loading_A {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    li {
      width: 10px;
      height: 30px;
      background-color: #333;
      margin: 5px;
      list-style: none;
      animation: scaling 0.7s infinite alternate;
    }
    li:nth-child(1) {
      animation-delay: 0.1s;
    }
    li:nth-child(2) {
      animation-delay: 0.2s;
    }
    li:nth-child(3) {
      animation-delay: 0.3s;
    }
    li:nth-child(4) {
      animation-delay: 0.4s;
    }
    li:nth-child(5) {
      animation-delay: 0.5s;
    }
    li:nth-child(6) {
      animation-delay: 0.6s;
    }
  }
  @keyframes scaling {
    0% {
      transform: scaleY(1);
    }
    25% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1);
    }
    75% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(3);
    }
  }
}
</style>
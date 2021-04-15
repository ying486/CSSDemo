<template>
  <div class="loading">
    <div class="btn" @click="onClick">button</div>
  </div>
</template>

<script>
export default {
  name: "loading",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      let btn = document.getElementsByClassName("btn");
      let el = document.createElement("span");
      btn[0].appendChild(el);
      $(".btn span").addClass("mask");
      el.style.top = e.offsetY + "px";
      el.style.left = e.offsetX + "px";

      setTimeout(() => {
        el.remove();
      }, 1000);
    },
  },
};
</script>

<style lang='scss'>
.loading {
  width: 100%;
  height: 100%;
  background-color: #333;

  .btn {
    width: 200px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(90deg, #755bea, #ff72c0);
    border-radius: 50px;
    font-size: 25px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    user-select: none;
    overflow: hidden;
    cursor: pointer;
  }

  .mask {
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 50px;
    animation: animate 1s;
  }

  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      opacity: 0.3;
    }

    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
}
</style>
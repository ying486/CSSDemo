<template>
  <div class="button-B">
    <div class="container">
      <div class="btn">button</div>
      <div class="btn2">button</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "button-B",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss'>
.button-B {
  width: 100%;
  height: 100%;

  .container {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    position: relative;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #666;
    &::before,
    &::after {
      content: "";
      position: absolute;
      border: 2px solid transparent;
      width: 0;
      height: 0;
      border-color: #007acc;
      transition: width 0.3s, height 0.3s 0.3s;
    }
    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover:before,
    &:hover:after {
      width: 100%;
      height: 100%;
    }

    &:active::before {
      border-color: #fff;
      transition: border-color 0.3s;
    }
  }

  .btn2 {
    position: relative;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #666;
    box-sizing: border-box;

    &::before,
    &::after {
      content: "";
      box-sizing: inherit;
      position: absolute;
      border: 2px solid transparent;
      width: 0;
      height: 0;
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover:before,
    &:hover:after {
      width: 100%;
      height: 100%;
    }

    &:hover:before {
      border-top-color: #007acc;
      border-right-color: #007acc;
      transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
    }

    &:hover:after {
      border-bottom-color: #007acc;
      border-left-color: #007acc;
      transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
        height 0.3s ease-out 1s;
    }

    &:active,
    &:active {
      border: 2px solid rgb(4, 83, 107);
    }
  }
}
</style>
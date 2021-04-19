<template>
  <div class="button-C">
    <div class="container">
      <div class="btn">button</div>
      <div class="btn2">button</div>
      <div class="btn3">button</div>
      <div class="btn4">button</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "button-C",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss'>
.button-C {
  width: 100%;
  height: 100%;

  .container {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .btn {
      position: relative;
      width: 150px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #666;
      border: 1px solid #007acc;
      margin: 30px 0;
      &::before,
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        transition: all 0.5s ease;
      }

      &::before {
        top: -5px;
        left: -5px;
        border-top: 1px solid #007acc;
        border-left: 1px solid #007acc;
      }

      &::after {
        bottom: -5px;
        right: -5px;
        border-bottom: 1px solid #007acc;
        border-right: 1px solid #007acc;
      }

      &:hover::before,
      &:hover::after {
        width: calc(100% + 9px);
        height: calc(100% + 9px);
        transition: all 0.5s ease;
      }
    }

    .btn2 {
      width: 150px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #666;
      margin: 30px 0;
      outline: 2px solid #007acc;
      outline-offset: -2px;
      background: linear-gradient(90deg, #007acc 50%, transparent 0) repeat-x,
        linear-gradient(90deg, #007acc 50%, transparent 0) repeat-x,
        linear-gradient(0deg, #007acc 50%, transparent 0) repeat-y,
        linear-gradient(0deg, #007acc 50%, transparent 0) repeat-y;
      background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
      background-position: 0 0, 0 100%, 0 0, 100% 0;
      &:hover {
        outline: none;
        box-shadow: inset 0px 0px 10px rgba(0, 122, 204, 0.5);
        animation: bdrMove 0.1s infinite;
      }
    }

    @keyframes bdrMove {
      100% {
        background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
      }
    }

    .btn3 {
      width: 150px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #666;
      margin: 30px 0;
      position: relative;
      overflow: hidden;
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background: linear-gradient(#399953, #399953),
          linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
          linear-gradient(#377af5, #377af5);
        background-size: 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-repeat: no-repeat;
        z-index: -1;
        animation: rotate 4s linear infinite;
      }

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 146px;
        height: 58px;
        background-color: #fff;
        z-index: -1;
      }
    }

    @keyframes rotate {
      100% {
        transform: translate(-50%, -50%) rotate(1turn);
      }
    }

    .btn4 {
      width: 150px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #666;
      margin: 30px 0;
      position: relative;
      overflow: hidden;
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background: conic-gradient(
          transparent,
          rgba(168, 239, 255, 1),
          transparent 30%
        );
        animation: rotate 4s linear infinite;
        z-index: -1;
      }

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 146px;
        height: 58px;
        background-color: #fff;
        z-index: -1;
      }
    }
  }
}
</style>
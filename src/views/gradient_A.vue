<template>
  <div class="gradient_A">
    <div class="text">DEMO</div>
  </div>
</template>

<script>
export default {
  name: "gradient_A",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss'>
.gradient_A {
  width: 100%;
  height: 100vh;
  background: conic-gradient(from 45deg, white, black 90deg, white);
  animation: animate 2s linear forwards;

  .text {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(0, -50%);
    font-size: 70px;
    color: rgba(255, 255, 255, 0.1);
    text-shadow: 0 0 100px rgba(0, 0, 0, 1);
    user-select: none;
  }

  @keyframes animate {
    0% {
      background: conic-gradient(from 45deg, white, black 90deg, white);
    }

    5% {
      background: conic-gradient(from 54deg, white, black 90deg, white);
    }

    10% {
      background: conic-gradient(from 63deg, white, black 90deg, white);
    }

    15% {
      background: conic-gradient(from 72deg, white, black 90deg, white);
    }

    20% {
      background: conic-gradient(from 81deg, white, black 90deg, white);
    }

    25% {
      background: conic-gradient(from 90deg, white, black 90deg, white);
    }

    30% {
      background: conic-gradient(from 99deg, white, black 90deg, white);
    }

    35% {
      background: conic-gradient(from 108deg, white, black 90deg, white);
    }

    40% {
      background: conic-gradient(from 117deg, white, black 90deg, white);
    }

    45% {
      background: conic-gradient(from 126deg, white, black 90deg, white);
    }

    50% {
      background: conic-gradient(from 135deg, white, black 90deg, white);
    }

    55% {
      background: conic-gradient(from 144deg, white, black 90deg, white);
    }

    60% {
      background: conic-gradient(from 153deg, white, black 90deg, white);
    }

    65% {
      background: conic-gradient(from 162deg, white, black 90deg, white);
    }

    70% {
      background: conic-gradient(from 171deg, white, black 90deg, white);
    }

    75% {
      background: conic-gradient(from 180deg, white, black 90deg, white);
    }

    80% {
      background: conic-gradient(from 189deg, white, black 90deg, white);
    }

    85% {
      background: conic-gradient(from 198deg, white, black 90deg, white);
    }

    90% {
      background: conic-gradient(from 207deg, white, black 90deg, white);
    }

    95% {
      background: conic-gradient(from 216deg, white, black 90deg, white);
    }

    100% {
      background: conic-gradient(from 225deg, white, black 90deg, white);
    }
  }
}
</style>
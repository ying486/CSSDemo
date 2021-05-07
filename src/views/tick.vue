<template>
  <div class="tick">
    click
    <input type="checkbox" />
    <svg class="checked">
      <circle
        class="circle"
        cx="200"
        cy="200"
        r="190"
        stroke="#68E534"
        stroke-width="20"
        stroke-linecap="round"
        fill="none"
      />
      <polyline
        class="tick"
        points="88,214 173,284 304,138"
        stroke="#68E534"
        stroke-width="20"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "tick",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss'>
.tick {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 30px;
  }

  input[type="checkbox"]:checked + svg .circle {
    animation: cir 1s ease-in-out forwards;
  }

  input[type="checkbox"]:checked + svg .tick {
    animation: tic 1s ease forwards 0.5s;
  }

  .checked {
    width: 400px;
    height: 400px;
  }

  .circle {
    stroke-dasharray: 1194;
    stroke-dashoffset: 1194;
  }

  .tick {
    stroke-dasharray: 350;
    stroke-dashoffset: 350;
  }

  @keyframes cir {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes tic {
    100% {
      stroke-dashoffset: 0;
    }
  }
}
</style>
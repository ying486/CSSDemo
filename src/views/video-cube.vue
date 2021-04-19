<template>
  <div class="video-cube">
    <video
      class="background"
      src="@/assets/videos/daily.mp4"
      autoplay
      muted
      loop
      @click="voice"
    ></video>
    <div class="cube" @click="playPause">
      <div class="panel">
        <video src="@/assets/videos/daily.mp4" autoplay muted loop></video>
      </div>
      <div class="panel">
        <video src="@/assets/videos/daily.mp4" autoplay muted loop></video>
      </div>
      <div class="panel">
        <video src="@/assets/videos/daily.mp4" autoplay muted loop></video>
      </div>
    </div>
    <img v-if="showHint" class="hint" :src="imgSrc" />
  </div>
</template>

<script>
export default {
  name: "video-cube",
  components: {},
  props: {},
  data() {
    return {
      myVideo: null,
      showHint: false,
      imgSrc: "",
      time: 0,
    };
  },
  computed: {
    stop() {
      return require("@/assets/images/stop.png");
    },
    play() {
      return require("@/assets/images/play.png");
    },
    silent() {
      return require("@/assets/images/silent.png");
    },
    voiced() {
      return require("@/assets/images/voiced.png");
    },
  },
  methods: {
    // 播放与暂停
    playPause() {
      clearTimeout(this.time);
      if (!this.showHint) {
        if (this.myVideo[0].paused)
          this.myVideo.forEach((item) => {
            item.play();
            this.imgSrc = this.play;
          });
        else
          this.myVideo.forEach((item) => {
            item.pause();
            this.imgSrc = this.stop;
          });
        this.showHint = true;
      }
      this.time = setTimeout(() => {
        this.showHint = false;
      }, 1000);
    },
    // 静音
    voice() {
      clearTimeout(this.time);
      if (!this.showHint) {
        this.myVideo[0].muted = !this.myVideo[0].muted;
        this.imgSrc = this.myVideo[0].muted ? this.silent : this.voiced;
        this.showHint = true;
      }
      this.time = setTimeout(() => {
        this.showHint = false;
      }, 1000);
    },
  },
  mounted() {
    this.myVideo = document.getElementsByTagName("video");
    this.imgSrc = this.play;
  },
};
</script>

<style lang='scss'>
.video-cube {
  width: 100%;
  height: 100%;
  --cube-size: 400px;
  --panel-size: 400px;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(20px);
  }

  .cube {
    width: var(--cube-size);
    height: var(--cube-size);
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateX(23deg) rotateY(-48deg) translate3d(-75%, -75%, 0);

    .panel {
      position: absolute;
      width: var(--panel-size);
      height: var(--panel-size);
      background: #fff;

      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .panel:nth-child(1) {
      transform: rotateX(90deg) translate3d(0, 0, 200px);
    }

    .panel:nth-child(1) video {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(90deg);
    }

    .panel:nth-child(2) {
      transform: rotateX(0deg) translate3d(0, 0, -200px);
    }

    .panel:nth-child(3) {
      transform: rotateY(270deg) translate3d(0, 0, 200px);
    }
  }
  .hint {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 30px;
    opacity: 1;
    animation: opac 1s ease forwards;
  }

  @keyframes opac {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
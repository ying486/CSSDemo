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
    };
  },
  methods: {
    // 播放与暂停
    playPause() {
      if (this.myVideo[0].paused)
        this.myVideo.forEach((item) => {
          item.play();
        });
      else
        this.myVideo.forEach((item) => {
          item.pause();
        });
    },
    // 静音
    voice() {
      this.myVideo[0].muted = !this.myVideo[0].muted;
    },
  },
  mounted() {
    this.myVideo = document.getElementsByTagName("video");
  },
};
</script>

<style lang='scss'>
.video-cube {
  width: 100%;
  height: 100%;
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
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateX(23deg) rotateY(-48deg) translate3d(-50%, -50%, 0);

    .panel {
      position: absolute;
      width: 200px;
      height: 200px;
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
      -webkit-transform: rotateX(90deg) translate3d(0, 0, 100px);
    }

    .panel:nth-child(1) video {
      -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(90deg);
    }

    .panel:nth-child(2) {
      -webkit-transform: rotateX(0deg) translate3d(0, 0, -100px);
    }

    .panel:nth-child(3) {
      -webkit-transform: rotateY(270deg) translate3d(0, 0, 100px);
    }
  }
}
</style>
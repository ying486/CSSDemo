<template>
  <div class="login">
    <form class="card" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <p class="title">Demo</p>
      <input type="text" placeholder="账户" />
      <input type="password" placeholder="密码" />
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      isIn: true,
      isOut: false,
      span: null,
    };
  },
  methods: {
    login() {
      alert("success");
    },
    // 监听鼠标进入card
    mouseEnter(e) {
      const con = document.querySelector(".card");
      if (this.isIn) {
        let el = document.createElement("span");
        el.style.left = e.layerX + "px";
        el.style.top = e.layerY + "px";
        con.appendChild(el);

        $(".card span").removeClass("out");
        $(".card span").addClass("in");
        this.span = document.querySelector(".card span");
        this.isIn = false;
        this.isOut = true;
      }
    },
    // 监听鼠标离开card
    mouseLeave(e) {
      const con = document.querySelector(".card");
      if (this.isOut) {
        $(".card span").removeClass("in");
        $(".card span").addClass("out");
        $(".out").css("left", e.layerX + "px");
        $(".out").css("top", e.layerY + "px");
        this.span = document.querySelector(".card span");
        this.isOut = false;

        setTimeout(() => {
          con.removeChild(this.span);
          this.isIn = true;
        }, 500);
      }
    },
  },
};
</script>

<style lang='scss'>
.login {
  width: 100%;
  height: 100%;
  background-color: #2a3d51;
  .card {
    position: relative;
    top: 20%;
    width: 250px;
    height: 350px;
    margin: 0 auto;
    background-color: #31485e;
    border-radius: 18px;
    box-shadow: 15px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .card .title {
    font-size: 50px;
    color: #fff;
    font-weight: 100;
    margin: 0 0 10px 0;
    z-index: 1;
  }

  .card input {
    background: none;
    border: 0;
    color: #fff;
    margin: 10px 0;
    padding: 6px;
    border-bottom: 1px solid #fff;
    outline: none;
    z-index: 1;
  }

  .card ::-webkit-input-placeholder {
    color: #fff;
    font-weight: 100;
  }

  .card button,
  .card button:hover,
  .card button:active {
    width: 150px;
    height: 30px;
    color: #fff;
    background-color: transparent;
    font-weight: 100;
    border: 1px solid #fff;
    border-radius: 50px;
    margin: 16px 0;
    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  .card button:hover {
    color: #31485e;
    background-color: #ffffff;
  }

  .card button:active {
    box-shadow: 2px 2px 5px 1px #333 inset;
  }

  // 鼠标进入的样式
  .card .in {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #3498bd;
    transform: translate(-50%, -50%);
    animation: in 1s ease-out forwards;
  }

  // 鼠标离开的样式
  .card .out {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1200px;
    height: 1200px;
    border-radius: 50%;
    background-color: #3498bd;
    transform: translate(-50%, -50%);
    animation: out 0.5s ease-out forwards;
  }

  // 设置鼠标进入时，元素动画
  @keyframes in {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 1200px;
      height: 1200px;
    }
  }

  // 设置鼠标离开时，元素动画
  @keyframes out {
    0% {
      width: 1200px;
      height: 1200px;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
}
</style>
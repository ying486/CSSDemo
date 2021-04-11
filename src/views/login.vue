<template>
  <div class="main">
    <div class="card">
      <span>Demo</span>
      <input type="text" placeholder="账户" />
      <input type="password" placeholder="密码" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    login() {
      alert("success");
    },
  },
};
</script>
<style lang='scss'>
.main {
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
  }
  .card span {
    font-size: 50px;
    color: #fff;
    font-weight: 100;
    margin: 0 0 10px 0;
  }

  .card input {
    position: relative;
    height: 20px;
    background-color: transparent;
    border: 0;
    color: #fff;
    margin: 10px 0;
    padding: 6px;
    border-bottom: 1px solid #fff;
    outline: none;
  }

  /* 
    .card input::before {
      content: "--";
      position: absolute;
      top: 10px;
      width: 50px;
      height: 10px;
      background-color: #fff;
    } */

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
    background-color: #31485e;
    font-weight: 100;
    border: 1px solid #fff;
    border-radius: 50px;
    margin: 16px 0;
    cursor: pointer;
    outline: none;
  }

  .card button:hover {
    color: #31485e;
    background-color: #ffffff;
  }

  .card button:active {
    box-shadow: 2px 2px 5px 1px #333 inset;
  }
}
</style>
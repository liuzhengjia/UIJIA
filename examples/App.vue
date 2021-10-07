<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />
    <m-card imgSrc="1.png" summary="晋级TS高手 搞定复杂项目" />
    <br>
    <m-card imgSrc="2.png" summary="2021后端校招面试直通车">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 ~ 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
    <br>
    <m-card
      imgSrc="2.png"
      :width="370"
      :imgHeight="90"
    >
      本路线旨在帮助想快速掌握SpringBoot应用的工程师，全方位多角度带你升级
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 。 6课程</div>
          <div class="level">15266人收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  padding: 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color: #919191;
  margin-bottom: 8px;
}
.price{
  color: #f01414;
}
.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>

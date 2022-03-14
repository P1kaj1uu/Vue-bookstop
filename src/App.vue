<template>
  <div id="app">
    <Header/>
    <Menus/>
    <router-view/>
  </div>
  <div>
    <footer class="copyright-footer">
      &copy; 版权所有：邓涛
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Menus from '@/components/Menus.vue'
import {factPrice, currency, formatTime} from './utils/util.js'
export default {
  components: {
    Header,
    Menus,
  },
  provide(){
    return {
      factPrice,
      currency,
      formatTime
    }
  }
}
</script>

<style>
#app {
  font-family: Microsoft YaHei, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: pointer;
}
a{
  text-decoration: none;
  color: #666;
}
.copyright-footer{
  position: fixed;
  background-color: gray;
  color: #FFF;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  height: 20px;
  line-height: 20px;
}
</style>

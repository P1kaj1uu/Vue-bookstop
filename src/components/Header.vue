<template>
  <div class="header">
    <img src="@/assets/images/logo.png">
    <HeaderSearch />
    <HeaderCart/>
    <span v-if="!user">请您<router-link to="/login">登录</router-link>&nbsp;&nbsp;&nbsp;或者&nbsp;&nbsp;&nbsp;点击<router-link to="/register">注册</router-link></span>
    <span v-else>欢迎您，{{ user.username }}，<a href="javascript:;" @click="logout">退出登录</a></span>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";
import { mapState, mapMutations } from 'vuex'

export default {
  name: "Header",

  components: {
    HeaderSearch,
    HeaderCart
  },

  computed: {
    // user模块带有命名空间
    ...mapState('user', [
      // 将this.user 映射为 this.$store.state.user.user
      'user'
    ])
  },

  methods: {
    logout(){
      this.deleteUser();
    },
    // user模块带有命名空间
    ...mapMutations('user', [
      // 将this.deleteUser 映射为 this.$store.commit('user/deleteUser')
      'deleteUser'
    ])
  },
};
</script>
<style scoped>
.header {
    width: 100%;
}
.header img{
    display: block;
    width: 150px;
    height: 80px;
    float: left;
    margin: auto;
    border-radius: 50%;  
}
.header span{
    display: block;
    float: right;
    margin-top: 25px;
    margin-right: 20px;
}
.header a{
  text-decoration: none;
  color: red;

}
</style>
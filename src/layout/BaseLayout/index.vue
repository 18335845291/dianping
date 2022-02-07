<template>
  <el-container class="base-layout">
    <header-bar></header-bar>
    <el-container>
      <menu-aside></menu-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderBar from "./compontents/HeaderBar.vue";
import MenuAside from "./compontents/MenuAside.vue";
export default {
  components: { HeaderBar, MenuAside },
  name: "base-layout",
};
</script>

<style lang="scss" scoped>
.base-layout {
  @include wh(100vw, 100vh);
  overflow: hidden;
  display: block;
  .content {
    background: #f7f7f7;
  }
}
</style>
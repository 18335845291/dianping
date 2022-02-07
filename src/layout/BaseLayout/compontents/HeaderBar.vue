<template>
  <el-header class="header-bar">
    <a href="javascript:;" class="logo">
      <img
        src="https://p0.meituan.net/dprainbow/7b114c18295b3ceef8f3308a0175ce5b20870.png"
        alt=""
      />
    </a>
    <div class="tools">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "header-bar",
};
</script>

<style lang="scss" scoped>
.header-bar {
  @include wh(100vw, 56px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background: #fff;
  position: relative;
  z-index: 100;
  .logo {
    @include wh(auto, 32px);
    img {
      @include wh(auto, 32px);
    }
  }
}
</style>
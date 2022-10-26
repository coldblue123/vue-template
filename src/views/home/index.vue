<template>
  <div class="app-content">
    <p><center>这是需要登录后才能看的页面</center></p>
    <p><center>{{ $store.getters.userInfo }}</center></p>
    <p><center><el-button type="danger" @click="handleOut">退出登录</el-button></center></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    async handleOut() {
      // 测试退出
      await this.$store.dispatch('user/logout')
      // location.reload()
      this.$router.replace('/login')
      this.$message.success('退出成功')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

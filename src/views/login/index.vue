<template>
  <div class="text-center">
    <p>这是登录测试页面</p>
    <div class="px-80 text-center mt-10">
      <div class="text-left">baseUrl : {{ baseUrl }}</div>
      <el-input v-model="formObj.account" placeholder="用户名" />
      <el-input v-model="formObj.password" placeholder="密码" />
      <el-button type="primary" class="mt-10" @click="handleLogin">测试登录</el-button>
    </div>
    <g2Test />
  </div>
</template>
<script>
import g2Test from '@/components/g2-test/index.vue'
export default {
  components: {
    g2Test
  },
  data() {
    return {
      info: '',
      baseUrl: process.env.VUE_APP_BASE_API,
      formObj: {
        account: '',
        password: ''
      }
    }
  },
  created() {
  },
  methods: {
    async handleLogin() {
      // 测试登录
      const { code, message } = await this.$store.dispatch('user/login', this.formObj)
      console.log(code)
      if (code === 500) {
        this.$message.error(message)
        return
      }
      const info = await this.$store.dispatch('user/getInfo')
      this.info = info
      this.$router.replace('/')
      this.$message.success('登录成功')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

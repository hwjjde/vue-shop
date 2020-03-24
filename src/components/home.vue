<template>
  <div>
    <el-button type="primary" @click="exitLogin">退出</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    exitLogin() {
      let bool = window.sessionStorage.removeItem('token')
      this.$message.success('退出成功')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped></style>

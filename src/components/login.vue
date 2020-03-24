<template>
  <div class="login">
    <section class="main">
      <div class="avatar-box">
        <img src="../assets/logo.png" alt="头像" />
      </div>
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginForm.username"
            ref="username"
            focus
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-lock_fill"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="loginFormReset">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '请输入3~15位用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 重置表单
    loginFormReset() {
      //获取表单ref对象
      this.$refs.loginFormRef.resetFields()
    },
    //点击登录
    login() {
      //对表单进行预验证   result验证结果
      this.$refs.loginFormRef.validate(async result => {
        if (!result) return
        const { data } = await this.$http.post('login', this.loginForm)
        if (data.meta.status !== 200) this.$message.error('用户名或密码错误')
        else {
          this.$message.success('登录成功')
          window.sessionStorage.setItem('token', data.data.token)
          this.$router.push('/home')
        }
      })
    }
  },
  mounted() {
    this.$refs.username.focus()
  }
}
</script>

<style lang="less" scoped>
.login {
  background-color: #2b3b4b;
  color: #fff;
  height: 100%;
  width: 100%;
}
.main {
  width: 450px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  padding: 0 20px;
  .el-form-item {
    position: relative;
    top: -40px;
    box-sizing: border-box;
  }

  .btn {
    position: relative;
    top: -38px;
    display: flex;
    justify-content: flex-end;
  }
}
.avatar-box {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 10px #eee;
  overflow: hidden;
  padding: 10px;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #eee;
    background-color: #eee;
    box-shadow: 0 0 10px #eee;
  }
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

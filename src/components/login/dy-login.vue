<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.03.04
* Filename      : dy-login.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyLogin">
    <div class="loginTitle"><img src="/static/logo.png" /> 用户登录</div>
    <Form ref="userForm" :model="userInfo" :rules="loginRule">
      <FormItem prop="userName">
        <Row>
          <Col span="24">
            <Input
              type="text"
              prefix="ios-contact"
              v-model="userInfo.userName"
              placeholder="请输入用户名"
            />
          </Col>
        </Row>
      </FormItem>
      <FormItem prop="userPass">
        <Row>
          <Col span="24">
            <Input
              type="password"
              prefix="ios-lock"
              password
              v-model="userInfo.userPass"
              placeholder="请输入密码"
            />
          </Col>
        </Row>
      </FormItem>
    </Form>
    <div class="downInput">
      <div class="phoneLogin" @click="phone()">手机验证码登录</div>
      <div class="missPass" @click="reset()">忘记密码？</div>
    </div>
    <Button long ghost @click="loginIn()">登录</Button>
    <div class="register" @click="register()">立即注册</div>
    <div class="checkContain">
      <Checkbox class="saveName" v-model="saveUserInfo">记住账号</Checkbox>
      <Checkbox class="savePass" v-model="saveUserInfo">记住密码</Checkbox>
    </div>
    <div class="oauthTitleContain">
      <div class="line"></div>
      <div class="title">第三方登录</div>
      <div class="line"></div>
    </div>
    <div class="oauthContain">
      <div class="oauthItem">
        <img src="@/assets/icons/ic_oauth_login_qq.png" />
      </div>
      <div class="oauthItem">
        <img src="@/assets/icons/ic_oauth_login_wx.png" />
      </div>
      <div class="oauthItem">
        <img src="@/assets/icons/ic_oauth_login_sina.png" />
      </div>
      <div class="oauthItem" @click="adminLoginIn()">
        <img src="/static/logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { LoginApi } from '@/api';
export default {
  name: 'DyLogin',
  components: {},
  data() {
    return {
      userInfo: {
        userName: '',
        userPass: ''
      },
      loginRule: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        userPass: [{ required: true, message: '请输入登录密码', trigger: 'blur' }]
      },
      saveUserInfo: false
    };
  },
  created() {},
  mounted() {
    if (localStorage.getItem('userName')) {
      this.userInfo.userName = localStorage.getItem('userName');
    }
    if (localStorage.getItem('userPass')) {
      this.userInfo.userPass = localStorage.getItem('userPass');
    }
  },

  methods: {
    // 是否记录用户名密码
    handleCheckboxChange(value) {
      sessionStorage.rememberMe = value;
    },
    adminLoginIn() {
      let params = {
        userName: 'admin',
        userPass: 'admin'
      };
      this.loginRequest(params);
    },
    loginIn() {
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          let params = {
            userName: this.userInfo.userName,
            userPass: this.userInfo.userPass
          };
          this.loginRequest(params);
        }
      });
    },
    async loginRequest(params) {
      const {
        data: { res, code, msg }
      } = await this.$http('post', LoginApi.login, JSON.stringify(params));
      if (code === 0) {
        sessionStorage.token = res.token;
        this.$router.push({ path: '/dy' });
      } else {
        this.$message.error(msg);
      }
    },
    phone() {
      this.$emit('phone');
    },
    reset() {
      this.$emit('reset');
    },
    register() {
      this.$emit('register');
    }
  }
};
</script>
<style lang="scss" scoped>
.DyLogin {
  .loginTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    img {
      height: 30px;
      width: 30px;
      margin-right: 10px;
    }
  }
  .downInput {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .phoneLogin {
      flex: 1;
      color: white;
    }
    .missPass {
      flex: 1;
      text-align: right;
      color: white;
    }
  }
  .register {
    cursor: pointer;
    text-align: center;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .checkContain {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .saveName {
      flex: 1;
      color: white;
    }
    .savePass {
      flex: 1;
      text-align: right;
      color: white;
    }
  }
  .oauthTitleContain {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .line {
      flex: 1;
      height: 0px;
      border-top: 1px solid #eaeaea;
    }
    .title {
      padding: 0 10px;
      color: white;
    }
  }
  .oauthContain {
    display: flex;
    align-items: center;
    .oauthItem {
      flex: 1;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
        margin: 0 10px;
      }
    }
  }
}
</style>

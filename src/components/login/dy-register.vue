<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.03.12
* Filename      : dy-register.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyRegister">
    <div class="registerTitle"><img src="/static/logo.png" /> 用户注册</div>
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
      <FormItem prop="userPass">
        <Row>
          <Col span="24">
            <Input
              type="password"
              prefix="ios-lock"
              password
              v-model="userInfo.userPass2"
              placeholder="请输入确认密码"
            />
          </Col>
        </Row> </FormItem
      ><FormItem prop="userPass">
        <Row>
          <Col span="15">
            <Input
              type="tel"
              prefix="ios-call"
              v-model="userInfo.userPhone"
              placeholder="请输入手机号"
            />
          </Col>
          <Col span="8" push="1">
            <Button long ghost @click="getVer()">获取验证码</Button>
          </Col>
        </Row>
      </FormItem>
    </Form>
    <div class="buttonContain">
      <Button long ghost @click="register()">立即注册</Button>
      <div @click="cancel()">放弃</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DyRegister',
  components: {},
  data() {
    return {
      userInfo: {
        userName: '',
        userPass: '',
        userPass2: ''
      },
      loginRule: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        userPass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        userPass2: [{ required: true, message: '请输入确认密码', trigger: 'blur' }],
        userPhone: [{ required: true, message: '请输入手机号', trigger: 'blur' }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    getVer() {},
    register() {
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          // let params = {
          //   userName: this.userInfo.userName,
          //   userPass: this.userInfo.userPass
          // };
          // this.loginRequest(params);
          this.cancel();
        }
      });
    },
    cancel() {
      this.$emit('back');
    }
  }
};
</script>
<style lang="scss" scoped>
.DyRegister {
  .registerTitle {
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
  .buttonContain {
    display: flex;
    div {
      cursor: pointer;
      align-self: flex-end;
      text-decoration: underline;
      color: white;
      text-align: right;
      margin-left: 10px;
    }
  }
}
</style>

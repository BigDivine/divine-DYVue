<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.03.13
* Filename      : dy-phone.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyPhone">
    <div class="registerTitle"><img src="/static/logo.png" /> 验证码登录</div>
    <Form
      ref="userForm"
      :model="userInfo"
      :rules="loginRule">
      <FormItem prop="userPhone">
        <Row>
          <Col span="24">
            <Input
              type="tel"
              prefix="ios-call"
              v-model="userInfo.userPhone"
              placeholder="请输入手机号" />
          </Col>
        </Row>
      </FormItem>
      <FormItem prop="userPhoneVer">
        <Row>
          <Col span="15">
            <Input
              type="tel"
              prefix="ios-send"
              v-model="userInfo.userPhoneVer"
              placeholder="请输入验证码" />
          </Col>
          <Col
            span="8"
            push="1">
            <Button
              long
              ghost
              @click="getVer()"
              >获取验证码</Button
            >
          </Col>
        </Row>
      </FormItem>
    </Form>
    <div class="buttonContain">
      <Button
        long
        ghost
        @click="register()"
        >登录</Button
      >
      <div @click="cancel()">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DyPhone',
  components: {},
  data() {
    return {
      userInfo: {
        userPhone: '',
        userPhoneVer: ''
      },
      loginRule: {
        userPhone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        userPhoneVer: [{ required: true, message: '请输入手机验证码', trigger: 'blur' }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    async getVer() {
      const {
        data: { res, code, msg }
      } = await this.$http(
        'post',
        LoginApi.getVerify,
        JSON.stringify({
          userPhone: this.userInfo.userPhone
        })
      );
      if (code === 0) {
        this.userInfo.userPhoneVer = res.sms_verify;
      } else {
        this.$Message.error(msg);
      }
    },
    register() {
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          if (this.userInfo.userPass === this.userInfo.userPass2) {
            let params = {
              userName: this.userInfo.userName,
              userPass: this.userInfo.userPass,
              userPhone: this.userInfo.userPhone,
              userPhoneVer: this.userInfo.userPhoneVer
            };
            const {
              data: { code, msg }
            } = await this.$http('post', LoginApi.register, JSON.stringify(params));
            if (code === 0) {
              this.$Message.success('注册成功');
              this.cancel();
            } else {
              this.$Message.error(msg);
            }
          }
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
.DyPhone {
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
}
</style>

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
    <Form ref="userForm" :model="userInfo" :rules="loginRule">
      <FormItem prop="userPhone">
        <Row>
          <Col span="24">
            <Input
              type="tel"
              prefix="ios-call"
              v-model="userInfo.userPhone"
              placeholder="请输入手机号"
            />
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
              placeholder="请输入验证码"
            />
          </Col>
          <Col span="8" push="1">
            <Button long ghost @click="getVer()">获取验证码</Button>
          </Col>
        </Row>
      </FormItem>
    </Form>
    <div class="buttonContain">
      <Button long ghost @click="register()">登录</Button>
      <div @click="cancel()">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DyPhone',
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.DyPhone {
}
</style>

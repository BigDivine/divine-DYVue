<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.03.04
* Filename      : index.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="Index">
    <Form ref="userForm" :model="userInfo" :rules="loginRule" class="formStyle">
      <FormItem>
        <Row>
          <Col span="24">
            <div
              style="display:flex;justify-content:center;align-items:center;color:white;font-size:20px;font-weight:600;"
            >
              <img style="height:30px;width:30px;margin-right:10px;" src="/static/logo.png" /><span
                >用户登录</span
              >
            </div>
          </Col>
        </Row>
      </FormItem>
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
      <!-- <FormItem prop="userPass">
        <Row>
          <Col span="24">
            <Input
              type="number"
              prefix="ios-call"
              v-model="userInfo.userPhone"
              placeholder="请输入手机号"
            />
          </Col>
        </Row>
      </FormItem> -->
      <FormItem>
        <Row>
          <Col span="24"> <Button long ghost @click="loginIn">登录</Button> </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Row>
          <Col span="24"> <Button long ghost @click="adminLoginIn">admin登录</Button> </Col>
        </Row>
      </FormItem>
      <FormItem
        style="text-align: right;color:#ffffff"
        v-model="saveUserInfo"
        @on-change="handleCheckboxChange"
      >
        <Row>
          <Col span="24"> <Checkbox>记住我的登录</Checkbox> </Col>
        </Row>
      </FormItem>
      <FormItem style="text-align: center;color:#ffffff">
        <Row>
          <Col span="24"> <div>D--------------Y</div> </Col>
        </Row>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { LoginApi } from '@/api';
export default {
  name: 'Index',
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
    // this.userInfo.userPass = '';
    // if (localStorage.getItem('userTenant')) {
    //   this.userInfo.userTenant = localStorage.getItem('userTenant');
    // }
  },

  methods: {
    // 是否记录用户名密码
    handleCheckboxChange(value) {
      sessionStorage.rememberMe = value;
    },
    async adminLoginIn() {
      let params = {
        userName: 'admin',
        userPass: 'admin'
      };
      let res = await this.$http('post', LoginApi.login, JSON.stringify(params));
      const { data, code, msg } = res.data;
      if (code === 0) {
        sessionStorage.token = data.token;
        this.$router.push({ path: '/dy' });
      } else {
        this.$message.error(msg);
      }
    },
    loginIn() {
      // let params = {
      //   username: this.userInfo.userName,
      //   pwd: this.userInfo.userPass,
      // };
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          // HttpLogin.loginIn(
          //   this,
          //   params,
          //   (res) => {
          //     const { code, msg, token, username } = res;
          //     if (code === 0) {
          //       sessionStorage.token = token;
          //       sessionStorage.username = username;
          //       sessionStorage.token = res.token;
          //       localStorage.setItem('userName', this.userInfo.userName);
          //       localStorage.setItem('userPass', this.userInfo.userPass);
          //       this.$router.push({
          //         path: '/bi/manage',
          //         name: 'manage',
          //       });
          //     } else {
          //       console.log('request error:' + msg);
          //     }
          //   },
          //   (e) => {
          //     console.log('request error:' + e);
          //   }
          // );
        }
      });
    },
    toPreview() {
      this.$router.push({
        path: '/bi/execute',
        name: 'execute',
        query: {
          config: {
            reportId: '0048cf44-2365-4dfc-91b1-9beb32411812' // '905595cb-a027-47ea-ac41-c1080ea37dbe'// '0048cf44-2365-4dfc-91b1-9beb32411812'// '27bae9ba-ec47-4521-a456-d7deefb2baf4'// 'c9dbce9a-ad10-4aff-a286-e64d30250e0b'
          }
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes bglinear {
  0% {
    background-position: 0 100%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0 100%;
  }
}
.Index {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #c850c0, #4158d0);

  background-size: 200% 100%;
  animation: bglinear 10s ease infinite;

  .loginTitle {
    text-align: center;
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
  }
  .formStyle {
    width: 400px;
    padding: 20px 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: blink 5s infinite alternate;
  }

  @keyframes blink {
    0% {
      box-shadow: 0 0px 15px #7a7a7a;
    }
    100% {
      box-shadow: 0 0px 15px #ffffff;
    }
  }
}
</style>

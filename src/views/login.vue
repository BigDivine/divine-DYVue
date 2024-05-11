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
    <div class="contain">
      <transition name="login" @after-leave="afterLeave">
        <DyLogin
          v-if="type === 'login'"
          class="formStyle"
          @phone="phone"
          @reset="reset"
          @register="register"
        >
        </DyLogin>
      </transition>
      <transition name="register" @after-leave="afterLeave">
        <DyRegister v-if="type === 'register'" class="formStyle" @back="backToLogin"> </DyRegister>
      </transition>
        <transition name="phone" @after-leave="afterLeave">
        <DyRegister v-if="type === 'phone'" class="formStyle" @back="backToLogin"> </DyRegister>
      </transition>
    </div>
  </div>
</template>

<script>
import LoginComponents from '@/components/login/index.js';

export default {
  name: 'Index',
  components: LoginComponents,
  data() {
    return {
      //login:登录;register:注册;reset:重置;phone:手机号登录
      type: 'login',
      tempType: 'login'
    };
  },
  created() {},
  mounted() {},
  methods: {
    phone() {
      console.log('手机号登录');
      this.type = '';
      this.tempType = 'phone';
    },
    reset() {
      console.log('重设密码');
      this.type = '';
      this.tempType = 'reset';
    },
    register() {
      console.log('注册');
      this.type = '';
      this.tempType = 'register';
    },
    backToLogin() {
      console.log('注册完成');
      this.type = '';
      this.tempType = 'login';
    },
    afterLeave() {
      console.log('afterLeave');
      this.type = this.tempType;
    }
  }
};
</script>
<style lang="scss" scoped>
.Index {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #c850c0, #4158d0);
  background-size: 200% 100%;
  animation: bglinear 10s ease infinite;
  .contain {
    animation: blink 5s infinite alternate;
    border-radius: 10px;
    .formStyle {
      width: 400px;
      padding: 20px 50px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      white-space: nowrap;
    }
  }
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

  @keyframes blink {
    0% {
      box-shadow: 0 0px 15px #7a7a7a;
    }
    100% {
      box-shadow: 0 0px 15px #ffffff;
    }
  }
  .register-enter-active,
  .login-enter-active {
    animation: view-enter 0.5s ease 1;
  }
  .register-leave-active,
  .login-leave-active {
    animation: view-leave 0.5s ease 1;
  }
  @keyframes view-enter {
    0% {
      width: 0;
      padding: 20px 0;
    }
    100% {
      width: 400px;
      padding: 20px 50px;
    }
  }
  @keyframes view-leave {
    0% {
      width: 400px;
      padding: 20px 50px;
    }
    100% {
      width: 0;
      padding: 20px 0;
    }
  }
}
</style>

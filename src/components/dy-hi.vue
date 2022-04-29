<template>
  <div class="DYHiStyle">
    <div class="hiTextCH">{{ hiTextCN }}</div>
    <div class="hiTextUS">{{ hiTextUS }}</div>
  </div>
</template>

<script>
export default {
  name: "dy-hi",
  data() {
    return { hiTextCN: "", hiTextUS: "" };
  },
  created() {
    let date = new Date();
    let hours = date.getHours();
    this.hiTextCN = "你好，可爱的小家伙";
    this.hiTextUS = "hello,so cute baby";
    if (hours > 0 && hours < 7) {
      this.hiTextCN = this.hiTextCN + "，凌晨好！";
      this.hiTextUS = this.hiTextUS + ",good morning!";
    } else if (hours >= 7 && hours < 11) {
      this.hiTextCN = this.hiTextCN + "，早上好！";
      this.hiTextUS = this.hiTextUS + ",good morning!";
    } else if (hours >= 11 && hours < 16) {
      this.hiTextCN = this.hiTextCN + "，中午好！";
      this.hiTextUS = this.hiTextUS + ",good afternoon!";
    } else if (hours >= 16 && hours < 21) {
      this.hiTextCN = this.hiTextCN + "，下午好！";
      this.hiTextUS = this.hiTextUS + ",good evening!";
    } else if (hours >= 21 && hours < 24) {
      this.hiTextCN = this.hiTextCN + "，晚上好！";
      this.hiTextUS = this.hiTextUS + ",good night!";
    }
  },
};
</script>

<style lang="scss" scoped>
.DYHiStyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
  font-weight: 600;
  padding: 30px;
  .hiTextCH {
    color: #de2910;
  }
  .hiTextUS {
    color: #002c77;
  }
}
</style>

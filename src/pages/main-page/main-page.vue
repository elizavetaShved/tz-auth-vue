<template>
  <h1>Страница для авторизованного пользователя</h1>
  <button @click="logout" class="btn">Выход</button>
</template>

<script>
import { RouterParams } from "@/enums/router-params";

export default {
  name: "main-page",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: RouterParams.authPage });
    },
  },
};
</script>
<style scoped lang="scss">
.btn {
  padding: 6px 20px;
  background-color: #b9b9b9;
  border-radius: 10px;
  margin-top: 20px;
}
</style>

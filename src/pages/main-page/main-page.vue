<template>
  <section class="page-content">
    <h1>Страница для авторизованного пользователя</h1>
    <button @click="logout" class="test-btn">Выход</button>
  </section>
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

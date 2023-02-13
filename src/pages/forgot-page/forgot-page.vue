<template>
  <section class="page-content">
    <h1>Стр Восстановления пароля</h1>
    <button @click="back" class="test-btn">Назад</button>
  </section>
</template>

<script>
export default {
  name: "forgot-page",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <header class="header-logo">
    <div class="header-logo__container">
      <router-link to="/" class="header-logo__logo ibg">
        <icon-logo />
      </router-link>
    </div>
  </header>
</template>

<script>
import IconLogo from "@/assets/img/icon-logo.vue";
export default {
  name: "layout-header",
  components: { IconLogo },
};
</script>
<style scoped lang="scss" src="./style.scss" />

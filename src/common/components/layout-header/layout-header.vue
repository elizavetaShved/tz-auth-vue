<template>
  <header class="header-logo">
    <div class="header-logo__container">
      <div class="header-logo__logo ibg">
        <icon-logo />
      </div>
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

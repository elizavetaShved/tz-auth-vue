<template>
  <div class="wrapper">
    <div class="wrapper__inner">
      <div class="wrapper__inner-content">
        <layout-header />
        <main class="page">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "@/common/components/layout-header/layout-header.vue";

export default {
  name: "CApp",
  components: { LayoutHeader },
};
</script>

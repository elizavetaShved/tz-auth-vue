<template>
  <div class="wrapper">
    <div class="wrapper__inner">
      <div class="wrapper__inner-content">
        <layout-header />
        <main class="page">
          <router-view @loader="changeLoader($event)" />
        </main>
      </div>
    </div>

    <layout-loader v-if="isLoader" />
  </div>
</template>

<script>
import LayoutHeader from "@/common/components/layout-header/layout-header.vue";
import LayoutLoader from "@/common/components/layout-loader/layout-loader.vue";

export default {
  name: "CApp",
  components: { LayoutLoader, LayoutHeader },
  data() {
    return {
      isLoader: false,
    };
  },
  methods: {
    changeLoader(isLoader) {
      this.isLoader = isLoader;
    },
  },
};
</script>
<style scoped lang="scss" src="./app-style.scss" />

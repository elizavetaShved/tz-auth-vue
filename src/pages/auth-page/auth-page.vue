<template>
  <section class="authorization authorization-main">
    <div class="authorization-main__container">
      <div class="authorization-main__wrapper">
        <div class="authorization-main__body">
          <div class="authorization__title">Welcome back!</div>
          <div class="authorization__subtitle">
            Enter your credentials to access your account
          </div>
          <vee-form
            class="authorization__form"
            v-slot="{ errors }"
            @submit="onSubmit"
          >
            <c-input
              name="email"
              title="Email"
              :modelValue="form.email"
              type="email"
              placeholder="name@company.com"
              :error="errors.email"
              :isRequired="true"
              :isEmail="true"
            />
            <c-input
              name="password"
              title="Password"
              :modelValue="form.password"
              type="password"
              placeholder="Input your password"
              :error="errors.password"
              :isRequired="true"
              :isEmail="true"
            />
            <router-link :to="forgotLink" class="form-authorization__link">
              Forgot password?
            </router-link>
            <button type="submit" class="form-authorization__button">
              Sign in
            </button>
          </vee-form>
        </div>
        <div class="authorization__image">
          <icon-main-image />
        </div>

        <div class="authorization__dots authorization__dots_1">
          <icon-dots />
        </div>
        <div class="authorization__dots authorization__dots_2">
          <icon-dots />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CInput from "@/common/components/ui/CInput.vue";
import { Form as VeeForm } from "vee-validate";
import { RouterParams } from "@/enums/router-params";
import IconDots from "@/assets/img/icon-dots.vue";
import IconMainImage from "@/assets/img/icon-main-image.vue";
import { sendAuth } from "@/api/rest/auth";

export default {
  name: "auth-page",
  components: { IconMainImage, IconDots, VeeForm, CInput },
  emits: ["loader"],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      forgotLink: RouterParams.forgotPage,
    };
  },
  methods: {
    onSubmit(values) {
      this.$emit("loader", true);
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.set(key, values[key]);
      });

      sendAuth(formData)
        .then((request) => {
          if (request.success) {
            this.onSuccess(request);
          } else {
            this.onError(request.response.data);
          }
        })
        .catch((error) => {
          if (error && !error.success) {
            this.onError(error);
          }
        })
        .finally(() => {
          this.$emit("loader", false);
        });
    },
    onSuccess(request) {
      const token = request.access_token;
      localStorage.setItem("token", token);
      this.$router.push({ name: RouterParams.mainPage });
    },
    onError(error) {
      alert(error.errors);
    },
  },
};
</script>

<style scoped lang="scss" src="./authorization.scss" />
<style scoped lang="scss" src="./authorization-main.scss" />
<style scoped lang="scss" src="../../common/styles/_form-authorization.scss" />

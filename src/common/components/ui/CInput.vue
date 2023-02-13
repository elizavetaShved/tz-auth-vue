<template>
  <div class="form-authorization">
    <div class="form-authorization__label">{{ title }}</div>
    <label>
      <field
        :name="name"
        :type="getType"
        :value="modelValue"
        :rules="validate"
        :placeholder="placeholder"
        @input="onInput"
        :disabled="isDisabled"
        v-imask="isPhone ? phoneMask : false"
        class="form-authorization__input"
        :class="{ ['form-authorization__input_error']: error }"
      />
      <button
        v-if="type === 'password'"
        class="form-authorization__form-password-btn"
        @click="onTogglePassword"
      >
        <span
          class="form-authorization__form-password-btn-content"
          :class="{
            ['form-authorization__form-password-btn-content--hide']:
              isShowPassword,
          }"
        >
          <icon-eye class="form-icon-eye" />
        </span>
      </button>
    </label>
    <error-message :name="name" class="form-authorization__error-text" />
  </div>
</template>

<script>
import { useValidation } from "@/libs/validations";
import { ErrorMessage, Field } from "vee-validate";
import { IMaskDirective } from "vue-imask";
import { COMMON_MIN_LENGTH, PHONE_MIN_LENGTH } from "@/utils/consts";
import IconEye from "@/common/components/ui/icon-eye.vue";

export default {
  name: "CInput",
  components: { IconEye, Field, ErrorMessage },
  props: [
    "name",
    "title",
    "modelValue",
    "type",
    "placeholder",
    "isDisabled",
    "error",
    "isRequired",
    "minLength",
    "isPhone",
  ],
  data() {
    return {
      phoneMask: {
        mask: "+{7}(000)000-00-00",
      },
      isShowPassword: false,
      placeholderChar: " ",
    };
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    validate(value) {
      const validateParams = {};
      if (this.isRequired) validateParams.isRequired = true;
      if (this.type === "email") validateParams.isEmail = true;
      if (this.minLength) {
        this.minLength === true
          ? (validateParams.minLength = COMMON_MIN_LENGTH)
          : (validateParams.minLength = this.minLength);
      } else if (this.isPhone) {
        validateParams.minLength = PHONE_MIN_LENGTH;
      }
      return useValidation(value, validateParams);
    },
    onTogglePassword(event) {
      event.preventDefault();
      this.isShowPassword = !this.isShowPassword;
    },
  },
  computed: {
    getType() {
      if (this.type === "password") {
        return this.isShowPassword ? "text" : "password";
      } else {
        return this.type;
      }
    },
  },
  directives: {
    imask: IMaskDirective,
  },
};
</script>

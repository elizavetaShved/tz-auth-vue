const validationsRequired = (value) => {
  if (!value) {
    return "Обязательно для заполнения";
  }
};

const validationsEmail = (value) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "Недействительный адрес почты";
  }
};

const validationsMinLength = (value, min) => {
  if (value.length < min) {
    return `Не менее ${min} символов`;
  }
};

const validationsMaxLength = (value, max) => {
  if (value.length > max) {
    return `Не более ${max} символов`;
  }
};

export const useValidation = (value, validationMap) => {
  if (validationMap.isRequired) {
    const requiredError = validationsRequired(value);
    if (requiredError) return requiredError;
  }

  if (validationMap.isEmail) {
    const emailError = validationsEmail(value);
    if (emailError) return emailError;
  }

  if (validationMap.minLength) {
    const emailError = validationsMinLength(value, validationMap.minLength);
    if (emailError) return emailError;
  }

  if (validationMap.maxLength) {
    const emailError = validationsMaxLength(value, validationMap.maxLength);
    if (emailError) return emailError;
  }

  return true;
};

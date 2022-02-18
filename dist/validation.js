export function validityCheck(input) {
  let isValidate = true;
  if (input.required) {
    isValidate = isValidate && input.toString().trim().length !== 0;
  }
  if (input.minLength) {
    isValidate = isValidate && input.toString().trim().length >= 6;
  }
  if (input.maxLength) {
    isValidate = isValidate && input.toString().trim().length <= 30;
  }
  return isValidate;
}

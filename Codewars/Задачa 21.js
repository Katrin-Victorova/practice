// написать функцию которая принимает два параметра: переменную и тип и проверить приход типа
function typeValidation (variable, type) {
  return typeof(variable) === type;
}
// const typeValidation = (variable, type) => typeof(variable) === type;

typeValidation(42, "number") // true
typeValidation("42", "number") // false
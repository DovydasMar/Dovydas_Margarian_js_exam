/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
"use strict";
// console.log("script.js file was loaded");

const els = {
  form: document.forms[0],
  input: document.getElementById("search"),
  output: document.getElementById("output"),
};
// console.log(els);

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  convertNums();
});
function convertNums() {
  els.output.innerHTML = "";
  const ulEl = document.createElement("ul");
  ulEl.className = "unlisted";
  const lbLi = document.createElement("li");
  const pound = els.input.value * 2.2046;
  lbLi.textContent = `${els.input.value} kilograms = ${pound} pounds`;
  const gLi = document.createElement("li");
  const gram = els.input.value / 0.001;
  gLi.textContent = `${els.input.value} kilograms = ${gram} grams`;
  const ozLi = document.createElement("li");
  const ounce = els.input.value * 35.274;
  ozLi.textContent = `${els.input.value} kilograms = ${ounce} ounces`;
  ulEl.append(lbLi, gLi, ozLi);
  els.output.append(ulEl);
}

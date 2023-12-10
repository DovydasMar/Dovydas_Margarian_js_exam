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
console.log("script.js file was loaded");

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

  if (els.input.value === 1) {
    lbLi.textContent = `${els.input.value} kilogramas = ${pound} svarų`;
  } else if (els.input.value > 1 && els.input.value < 10) {
    lbLi.textContent = `${els.input.value} kilogramai = ${pound} svarų`;
  } else if (els.input.value > 9 && els.input.value <= 20) {
    lbLi.textContent = `${els.input.value} kilogramų = ${pound} svarų`;
  } else if (els.input.value.slice(-1) === "0") {
    lbLi.textContent = `${els.input.value} kilogramų = ${pound} svarų`;
  } else if (els.input.value.slice(-1) === "1") {
    lbLi.textContent = `${els.input.value} kilogramas = ${pound} svarų`;
  } else {
    lbLi.textContent = `${els.input.value} kilogramai = ${pound} svarų`;
  }
  const gLi = document.createElement("li");
  const gram = els.input.value / 0.001;
  if (els.input.value === 1) {
    gLi.textContent = `${els.input.value} kilogramas = ${gram} svarų`;
  } else if (els.input.value > 1 && els.input.value < 10) {
    gLi.textContent = `${els.input.value} kilogramai = ${gram} svarų`;
  } else if (els.input.value > 9 && els.input.value <= 20) {
    gLi.textContent = `${els.input.value} kilogramų = ${gram} svarų`;
  } else if (els.input.value.slice(-1) === "0") {
    gLi.textContent = `${els.input.value} kilogramų = ${gram} svarų`;
  } else if (els.input.value.slice(-1) === "1") {
    gLi.textContent = `${els.input.value} kilogramas = ${gram} svarų`;
  } else {
    gLi.textContent = `${els.input.value} kilogramai = ${gram} svarų`;
  }
  const ozLi = document.createElement("li");
  const ounce = els.input.value * 35.274;
  if (els.input.value === 1) {
    ozLi.textContent = `${els.input.value} kilogramas = ${ounce} svarų`;
  } else if (els.input.value > 1 && els.input.value < 10) {
    ozLi.textContent = `${els.input.value} kilogramai = ${ounce} svarų`;
  } else if (els.input.value > 9 && els.input.value <= 20) {
    ozLi.textContent = `${els.input.value} kilogramų = ${ounce} svarų`;
  } else if (els.input.value.slice(-1) === "0") {
    ozLi.textContent = `${els.input.value} kilogramų = ${ounce} svarų`;
  } else if (els.input.value.slice(-1) === "1") {
    ozLi.textContent = `${els.input.value} kilogramas = ${ounce} svarų`;
  } else {
    ozLi.textContent = `${els.input.value} kilogramai = ${ounce} svarų`;
  }
  ulEl.append(lbLi, gLi, ozLi);
  els.output.append(ulEl);
}

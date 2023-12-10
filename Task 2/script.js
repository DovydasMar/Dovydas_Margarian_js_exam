/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatdas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloiv i="ke (<dbtn_te">_sta0</div>)
------------------------------------------------------------------- */
"use strict";
// console.log("script.js file was loaded");
const els = {
  button: document.getElementById("btn__element"),
  output: document.getElementById("btn__state"),
};

// console.log(els);
let i = 0;
els.button.addEventListener("click", () => {
  i += 1;
  els.output.textContent = i;
});

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const answers = document.getElementById("output");
// console.log(answers);

const ENDPOINT = "cars.json";

getCars(ENDPOINT);

function getCars(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((carsArr) => {
      // console.log("carsArr ===", carsArr);
      // debugger;
      carsArr.sort((a, b) => b.models.length - a.models.length);
      // console.log("carsArr ===", carsArr);
      carsToHtml(carsArr);
    })
    .catch((error) => {
      // console.warn("ivyko klaida:", error);
      return error;
    });
}

function carsToHtml(arr) {
  arr.forEach((carObj) => {
    const container = document.createElement("div");
    const make = document.createElement("h2");
    make.textContent = carObj.brand;
    const list = document.createElement("ul");
    carObj.models.forEach((model) => {
      const liEl = document.createElement("li");
      liEl.textContent = model;
      list.append(liEl);
    });
    container.append(make, list);
    answers.append(container);
  });
}

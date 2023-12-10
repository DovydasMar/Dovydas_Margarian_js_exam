/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const els = {
  btn: document.getElementById("btn"),
  output: document.getElementById("output"),
  paragraph: document.getElementById("message"),
};
// console.log(els);
els.btn.addEventListener("click", userFetch);

function userFetch() {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      userToHtml(data);
    });
}

function userToHtml(userArr) {
  els.paragraph.classList.add("d-none");
  userArr.forEach((userObj) => {
    const divas = document.createElement("div");
    divas.classList.add("card");
    const username = document.createElement("h2");
    username.classList.add("card-text");
    const picture = document.createElement("img");
    picture.classList.add("card-img");
    username.textContent = userObj.login;
    picture.src = userObj.avatar_url;
    divas.append(username, picture);
    els.output.append(divas);
  });
}

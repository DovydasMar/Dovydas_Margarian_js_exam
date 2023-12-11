/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];
getUserAverageAge(users);
function getUserAverageAge(userArr) {
  let ageOfUsers = 0;
  userArr.forEach((userObj) => {
    ageOfUsers += userObj.age;
  });
  // console.log(ageOfUsers);
  const averageAge = ageOfUsers / userArr.length;
  // console.log(averageAge);
}

getUsersNames(users);
function getUsersNames(userArr) {
  const userNames = userArr.map((userObj) => userObj.name);
  // userArr.forEach((userObj) => {
  //   userNames.push(userObj.name);
  // });
  // console.log(userNames);
}

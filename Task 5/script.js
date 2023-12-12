/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "filterDogOwners" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];
const dogOwners = filterDogOwners(users);
function filterDogOwners(usersArr) {
  //atsakymas dogOwner
  const dogOwner = usersArr.filter((userObj) => {
    // console.log(userObj.hasDog);
    return userObj.hasDog;
  });
  return dogOwner;
  // console.log(dogOwner);
}
// console.log("dogOwners ===", dogOwners);

const usersOfLegalAge = filterAdults(users);
function filterAdults(userArr) {
  //atsakymas legalAge
  const legalAge = userArr.filter((userObj) => {
    // console.log(userObj.age > 18);
    return userObj.age > 18;
  });
  // console.log(legalAge);
  return legalAge;
}
// console.log("usersOfLegalAge ===", usersOfLegalAge);

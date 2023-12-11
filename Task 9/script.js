/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
"use strict";
// console.log("script.js file was loaded");
class Movie {
  title;
  director;
  budget;
  constructor(aArg, bArg, cArg) {
    this.title = aArg;
    this.director = bArg;
    this.budget = +cArg;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      // console.log(true);
      return true;
    } else {
      // console.log(false);
      return false;
    }
  }
}
// const movie1 = new Movie("piratesOfTheCaribbean", "Gore Verbinski", 1274000000);
// movie1.wasExpensive();

// const movie2 = new Movie("dudeWheresMyCar", "Danny Leiner", 13000000);
// movie2.wasExpensive();

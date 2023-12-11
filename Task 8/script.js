/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  a;
  b;
  constructor(aArg, bArg) {
    this.a = aArg;
    this.b = bArg;
  }
  sum() {
    // console.log("sum =", this.a + this.b);
    return this.a + this.b;
  }
  subtraction() {
    // console.log("minus =", this.a - this.b);
    return this.a - this.b;
  }
  multiplication() {
    // console.log("sandauga =", this.a * this.b);
    return this.a * this.b;
  }
  division() {
    // console.log("dalyba =", this.a / this.b);
    return this.a / this.b;
  }
}

// const calculatorius = new Calculator(2, 5);
// calculatorius.sum();
// calculatorius.subtraction();
// calculatorius.multiplication();
// calculatorius.division();

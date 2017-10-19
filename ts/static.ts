class Animal {
  static isAnimal(a) {
      return a instanceof Animal;
  }
}
let a =	new	Animal('Jack');
Animal.isAnimal(a); // true
a.isAnimal(a);
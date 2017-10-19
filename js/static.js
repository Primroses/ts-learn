var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    return Animal;
}());
var a = new Animal('Jack');
Animal.isAnimal(a); //	true
a.isAnimal(a); //	TypeError:	a.isAnimal	is	not	a	function

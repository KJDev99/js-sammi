function Car(name, color) {
  let carName = name;
  this.color = color;

  this.info = function () {
    console.log(`Name of car ${carName}, color is ${this.color}`);
  };

  this.getName = function () {
    return carName;
  };

  this.setName = function (name) {
    carName = name;
  };
}

const bmw = new Car("bmw", "black");

bmw.info();

class Animal {
  constructor(name){
    this.name = name;
  }
  get description(){
    return this.name + ' the ' + this.animal;
  }
}

class Dog extends Animal {
  constructor(name){
    super(name);
    this.animal = 'dog';
  }
  bark() {
    console.log(this.description, "goes woof!");
  }
}

let lucas = new Dog('Lucas');

lucas.bark();

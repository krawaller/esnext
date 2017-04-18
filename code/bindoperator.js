let user = {
  name: 'David',
  greet() {
    console.log(this && this.name,'says hello');
  }
};

let stolenGreet = user.greet;

console.log("This won't work:");
stolenGreet();

let fixedGreet = ::user.greet;

console.log("But this will:");
fixedGreet();
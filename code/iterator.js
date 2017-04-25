let norns = {
  [Symbol.iterator](){
    let vals = [
      {value: 'Urtid'},
      {value: 'Verdandi'},
      {value: 'Skuld'},
      {done: true}
    ];
    return {
      next(){
        return vals.shift();
      }
    }
  }
}

console.log([...norns]);
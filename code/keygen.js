// example borrowed from Alex Rauschmeyer

function* objEntries(obj){
  const props = Reflect.ownKeys(obj); // all props including symbols
  for(const prop of props){
    yield [prop, obj[prop]];
  }
}

let obj = {name:'David', age:37};

for(const [key,val] of objEntries(obj)){
  console.log(`${key}: ${val}`);
}
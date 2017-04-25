let doneInASecond = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('All done!');
  },1000);
});
doneInASecond.then(msg=>{
  console.log('Received:',msg); // 1 second later - Received All done!
});
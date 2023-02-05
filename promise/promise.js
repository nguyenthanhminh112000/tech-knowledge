////////
function sleep(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params);
    }, params);
  });
}
sleep(100)
  .then(function (p) {
    console.log(1);
    console.log('p1', p);
    //return undefined
  })
  .then(function (p2) {
    console.log('p2', p2);
    return sleep(200);
    //return {}promise
  })
  .then(function (p3) {
    console.log('p3', p3);
    console.log(2);
  });

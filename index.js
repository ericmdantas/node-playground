async function getSomethingBig() {
  console.log('running');

  var x = await pIsForPromise();

  console.log('done');
}

function pIsForPromise() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('almost-there')

      res('x');
    }, 1000);
  })
}

getSomethingBig();

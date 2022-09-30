(() => {
  let avengers: number = 10;
  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log('Estamos en problemas');
  } else {
    console.log('Estamos salvados');
  }

  avengers = 123;
  console.log({ avengers });
})();

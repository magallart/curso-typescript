(() => {
  let avenger: any;
  let exists;
  let power;

  avenger = 'Dr Strange';
  // console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0));

  avenger = 150.156151;
  console.log(avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();

(() => {
  const hero: [string, number] = ['Dr Strange', 100];

  hero[0] = 'Iron Man';
  hero[1] = 50;

  console.log(hero);
  
  const hero2: [string, number, boolean] = ['Spiderman', 12, true];
  
  hero2[0] = 'Black Panther';
  hero2[1] = 10;
  hero2[2] = false;
  
  console.log(hero2);
})();

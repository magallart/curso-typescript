(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatseñal = (): string => {
    return 'Batseñal activada';
  };

  console.log(typeof activateBatseñal);

  const heroName = returnName();
})();

(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  };

  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activos: true,
    poder: 1500.4151,
  };

  // const { poder, vision } = avengers;

  // console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ vision, ...resto }: Avengers) => {
    console.log(vision, resto);
  };

  // printAvenger(avengers);

  const avengersArr: [string, boolean, number] = [
    'Capitán América',
    true,
    150.15,
  ];
  // const ironman = avengersArr[1];
  // console.log({ ironman });
  const [capitan, ironman, seriaUnNumero] = avengersArr;
  console.log({ ironman });
})();

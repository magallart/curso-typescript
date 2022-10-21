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

  const printAvenger = ({ vision, ...resto }: Avengers) => {
    console.log(vision, resto);
  };

  printAvenger(avengers);
})();

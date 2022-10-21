(() => {
  interface Client {
    name: string;
    age: number;
    adress: Adress;
  }

  interface Adress {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Miguel Ángel',
    age: 25,
    adress: {
      id: 125,
      zip: 'VAL SUD',
      city: 'New York',
    }
  };

  const client2: Client = {
    name: 'Sara',
    age: 20,
    adress: {
      id: 52,
      zip: 'VAL NOR',
      city: 'Toronto',
    }
  };
})();

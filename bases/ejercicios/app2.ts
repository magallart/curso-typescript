() => {
  // Funciones básicas

  function sumados(a: number, b: number) {
    return a + b;
  }

  // Funciones básicas

  const contar = (heroes: []): number => {
    return heroes.length;
  };

  const superHeroes: string[] = [
    'Flash',
    'Arrow',
    'Superman',
    'Linterna Verde',
  ];

  contar(superHeroes as []);

  // Parametros por defecto

  const llamarBatman = (llamar: boolean = true) => {
    if (llamar) {
      console.log('Batiseñal activada');
    }
  };

  llamarBatman();

  // Rest?

  const unirHeroesdos = (...personas: string[]): string => {
    return personas.join(', ');
  };

  // Tipo funcion

  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ) => {};

  //Crear el tipo de función que acepte la funcion "noHaceNada"

  let noHaceNadaTampoco: (
    n: number,
    s: string,
    b: boolean,
    a: string[]
  ) => void;

  noHaceNadaTampoco = noHaceNada;
};

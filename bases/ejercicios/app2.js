"use strict";
() => {
    function sumados(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = [
        'Flash',
        'Arrow',
        'Superman',
        'Linterna Verde',
    ];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman();
    const unirHeroesdos = (...personas) => {
        return personas.join(', ');
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
};
//# sourceMappingURL=app2.js.map
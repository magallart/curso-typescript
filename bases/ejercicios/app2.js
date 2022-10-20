"use strict";
() => {
    // Funciones básicas
    function sumados(a, b) {
        return a + b;
    }
    // Funciones básicas
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
    // Parametros por defecto
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman();
    // Rest?
    const unirHeroesdos = (...personas) => {
        return personas.join(', ');
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    //Crear el tipo de función que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
};
//# sourceMappingURL=app2.js.map
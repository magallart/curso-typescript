"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const capitanAmerica = {
        name: 'Capitán América',
        weapon: 'Escudo',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, thor, capitanAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
//# sourceMappingURL=main.js.map
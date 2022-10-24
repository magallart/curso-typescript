"use strict";
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${id}: ${this.realName}`;
        }
    }
})();
//# sourceMappingURL=main.js.map
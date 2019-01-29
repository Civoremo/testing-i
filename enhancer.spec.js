const enhancer = require("./enhancer.js");

describe("SUCCESS", () => {
    const weapon = {
        originalName: "Flawless Sword",
        name: "Flawless Sword",
        type: "weapon",
        durability: 90,
        enhancement: 9,
    };

    const weaponEnh = {
        originalName: "Flawless Sword",
        name: "[+10] Flawless Sword",
        type: "weapon",
        durability: 90,
        enhancement: 10,
    };

    const armor = {
        originalName: "Shiny Boots",
        name: "[+15] Shiny Boots",
        type: "armor",
        durability: 80,
        enhancement: 15,
    };

    const armorEnh = {
        originalName: "Shiny Boots",
        name: "[PRI] Shiny Boots",
        type: "armor",
        durability: 80,
        enhancement: 16,
    };

    const itemLvl20 = {
        originalName: "Shiny Boots",
        name: "[PEN] Shiny Boots",
        type: "armor",
        durability: 80,
        enhancement: 20,
    };

    const itemEnhLvl20 = {
        originalName: "Shiny Boots",
        name: "[PEN] Shiny Boots",
        type: "armor",
        durability: 80,
        enhancement: 16,
    };

    test("success weapon", () => {
        expect(enhancer.success(weapon)).toEqual(weaponEnh);
    });

    test("success armor", () => {
        expect(enhancer.success(armor)).toEqual(armorEnh);
    });

    test("success enhancement at 20 already", () => {
        expect(() => {
            enhancer.success(itemLvl20);
        }).toThrow();
    });
});

describe("FAIL", () => {
    const weapon = {
        originalName: "Flawless Sword",
        name: "Flawless Sword",
        type: "weapon",
        durability: 90,
        enhancement: 3,
    };

    const weaponEnh = {
        originalName: "Flawless Sword",
        name: "Flawless Sword",
        type: "weapon",
        durability: 90,
        enhancement: 0,
    };

    const armor = {
        originalName: "Shiny Boots",
        name: "[+15] Shiny Boots",
        type: "armor",
        durability: 80,
        enhancement: 15,
    };

    const armorEnh = {
        originalName: "Shiny Boots",
        name: "[+5] Shiny Boots",
        type: "armor",
        durability: 80,
        enhancement: 5,
    };

    const armorLvl13Durability20 = {
        originalName: "Shiny Boots",
        name: "[+15] Shiny Boots",
        type: "armor",
        durability: 20,
        enhancement: 13,
    };

    const armorLvl17Durability5 = {
        originalName: "Shiny Boots",
        name: "[+15] Shiny Boots",
        type: "armor",
        durability: 5,
        enhancement: 17,
    };

    test("failed enhancement", () => {
        expect(enhancer.fail(weapon)).toEqual(weaponEnh);
    });

    test("failed enhancement", () => {
        expect(enhancer.fail(armor)).toEqual(armorEnh);
    });

    test("failed enhancement", () => {
        expect(() => {
            enhancer.fail(armorLvl13Durability20);
        }).toThrow();
    });

    test("failed enhancement", () => {
        expect(() => {
            enhancer.fail(armorLvl17Durability5);
        }).toThrow();
    });
});

// describe("REPAIR", () => {
//     const weapon = {
//         originalName: "Flawless Sword",
//         name: "Flawless Sword",
//         type: "weapon",
//         durability: 90,
//         enhancement: 0,
//     };

//     const weaponEnh = {
//         originalName: "Flawless Sword",
//         name: "Flawless Sword",
//         type: "weapon",
//         durability: 100,
//         enhancement: 0,
//     };

//     const armor = {
//         originalName: "Shiny Boots",
//         name: "Shiny Boots",
//         type: "armor",
//         durability: 80,
//         enhancement: 0,
//     };

//     const armorEnh = {
//         originalName: "Shiny Boots",
//         name: "Shiny Boots",
//         type: "armor",
//         durability: 100,
//         enhancement: 0,
//     };

//     test("repair weapon", () => {
//         expect(enhancer.repair(weapon)).toEqual(weaponEnh);
//     });
//     test("repair armor", () => {
//         expect(enhancer.repair(armor)).toEqual(armorEnh);
//     });
// });

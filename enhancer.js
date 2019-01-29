module.exports = {
    success,
    fail,
    repair,
    // enhance,
};

function success(item) {
    if (item.enhancement === 20) {
        throw new Error("Item at maximum enhancement");
    } else if (item.enhancement >= 0) {
        if (
            (item.enhancement <= 5 && item.type === "armor") ||
            (item.enhancement <= 7 && item.type === "weapon")
        ) {
            item.enhancement += 1;
            item.name = `[+${item.enhancement}] ${item.originalName}`;
        } else if (
            (item.enhancement > 5 && item.type === "armor") ||
            (item.enhancement > 7 && item.type === "weapon")
        ) {
            item.enhancement += 1;
            switch (item.enhancement) {
                case 16:
                    item.name = `[PRI] ${item.originalName}`;
                    break;
                case 17:
                    item.name = `[DUO] ${item.originalName}`;
                    break;
                case 18:
                    item.name = `[TRI] ${item.originalName}`;
                    break;
                case 19:
                    item.name = `[TET] ${item.originalName}`;
                    break;
                case 20:
                    item.name = `[PEN] ${item.originalName}`;
                    break;
                default:
                    if (item.enhancement !== 0) {
                        item.name = `[+${item.enhancement}] ${
                            item.originalName
                        }`;
                    } else {
                        item.name = `${item.originalName}`;
                    }
            }
        }
    }
    // console.log(item);
    return item;
}

function fail(item) {
    if (item.enhancement <= 14 && item.durability < 25) {
        console.log("item durability to low at enhancement 14 and below");
        throw new Error(
            `Item is at level ${item.enhancement} and durability is at ${
                item.durability
            }`
        );
    }
    if (item.enhancement >= 15 && item.durability < 10) {
        console.log("item durability to low at enhancement 15 and above");
        throw new Error(
            `Item is at level ${item.enhancement} and durability is at ${
                item.durability
            }`
        );
    }
    if (item.enhancement > 0 && item.enhancement < 14) {
        item.enhancement -= 5;
    }
    if (item.enhancement > 14 && item.enhancement < 17) {
        item.enhancement -= 10;
    }
    if (item.enhancement >= 17 && item.enhancement < 20) {
        item.enhancement -= 1;
    }
    if (item.enhancement === 20) {
        item.enhancement -= 10;
    }
    switch (item.enhancement) {
        case 16:
            item.name = `[PRI] ${item.originalName}`;
            break;
        case 17:
            item.name = `[DUO] ${item.originalName}`;
            break;
        case 18:
            item.name = `[TRI] ${item.originalName}`;
            break;
        case 19:
            item.name = `[TET] ${item.originalName}`;
            break;
        case 20:
            item.name = `[PEN] ${item.originalName}`;
            break;
        default:
            if (item.enhancement > 0) {
                item.name = `[+${item.enhancement}] ${item.originalName}`;
            }
            if (item.enhancement <= 0) {
                item.enhancement = 0;
                item.name = `${item.originalName}`;
            }
    }
    // console.log(item);
    return item;
}

function repair(item) {
    item.durability = 100;
    return item;
}

// function enhance(item) {
//     return item;
// }

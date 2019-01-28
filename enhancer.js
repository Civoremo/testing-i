module.exports = {
    success,
    fail,
    repair,
};

function success(item) {
    return item;
}

function fail(item) {
    return item;
}

function repair(item) {
    item.durability = 100;
    return item;
}

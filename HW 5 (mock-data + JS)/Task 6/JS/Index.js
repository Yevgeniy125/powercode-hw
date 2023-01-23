const mas = [['foo', 1], ['baz', 2], ['bar', 3]];

function fromPairs(array) {
    return array.reduce((acc, currValue) => {
        return {
            ...acc,
            [currValue[0]]: currValue[1],
        };
    }, {});
};

fromPairs(mas);
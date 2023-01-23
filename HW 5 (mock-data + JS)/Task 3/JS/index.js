const arr = [NaN, 0, 33, false, -51, '', undefined, 75, null];
function removeFalsy(array) {
    return array.filter((value) => value)
}
removeFalsy(arr);
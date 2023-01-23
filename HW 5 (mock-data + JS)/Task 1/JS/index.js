const arr = ['one', 2, 'three', 4, 'five'];

function clone(array) {
    let cloneArr = [];
    return cloneArr = array.slice(0);
}
clone(arr);
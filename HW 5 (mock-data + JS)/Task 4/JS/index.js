function getWord() { 
    const arr1 = ['e', null, 'r'];
    const arr2 = ['g', 'y'];

    const newArray = arr1.concat(arr2);
    newArray.unshift('p', 'o');
    newArray.push('m', 'o', 'd', 'e');
    newArray.splice(2, 0, 'w');
    newArray.splice(6, 2);
    newArray.splice(6, 1, 'c');
    let newArrayFilter = newArray.filter((value) => value);
    let newArrayJoin = newArrayFilter.join(' ');
    return newArrayJoin
}
getWord();
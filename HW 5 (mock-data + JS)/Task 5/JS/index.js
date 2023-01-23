function chunk(array, size) {
    const result = [];
    let part = [];

    for (let i = 0; i < array.length; i++) {
        part.push(array[i]);

        if ((i + 1) % size === 0 || i === array.length - 1) {
            result.push(part);
            part = [];
        }
    }
    return result;
}

chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3);
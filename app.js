function nextId(ids) {
    //this will be awesome!

    let myArr = ids;

    //sort array into order
    myArr.sort(function (a, b) {
        return a - b;
    });

    //remove any duplicates
    uniqueArray = myArr.filter(function (item, pos) {
        return myArr.indexOf(item) == pos;
    })


    // find if zero is the first element in the array
    // needed to pass test
    if (uniqueArray[0] !== 0) {
        return 0;
    }

    for (let i = 0; i < uniqueArray.length; i++) {
        let first = uniqueArray[i];
        let second = uniqueArray[i + 1];

        if (second !== first + 1) {
            return first + 1;
        }

    }
}

console.log(nextId([0, 1, 2, 3, 5])); // 4

console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11

console.log(nextId([1, 2, 2, 5, 3, 0])); // 4

console.log(nextId([1, 4, 2, 5, 3, 3])); // 6
/*
Question
    Arrays have a reverse method that changes the array by inverting the order in
    which its elements appear. For this exercise, write two functions, reverseArray
    and reverseArrayInPlace. The first, reverseArray, takes an array as argument
    and produces a new array that has the same elements in the inverse order. The
    second, reverseArrayInPlace, does what the reverse method does: it modifies
    the array given as argument by reversing its elements. Neither may use the
    standard reverse method.
*/

const reverseArray = (list) => {
    let newList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        newList.push(list[i]);
    }
    return newList;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(reverseArray(list));

const reverseArrayInPlace = (list) => {
    let i = 0, j = list.length - 1;
    while(i <= j) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        i++;
        j--;
    }
    return list;
}

console.log(reverseArrayInPlace(list));
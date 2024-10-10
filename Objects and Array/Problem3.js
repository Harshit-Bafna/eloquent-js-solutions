/*
Question
    Write a function arrayToList that builds up a list structure like the one
    shown when given [1, 2, 3] as argument. Also write a listToArray function
    that produces an array from a list. Then add a helper function prepend, which
    takes an element and a list and creates a new list that adds the element to the
    front of the input list, and nth, which takes a list and a number and returns
    the element at the given position in the list (with zero referring to the first
    element) or undefined when there is no such element.

    let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };
*/

const arrayToList = (array) => {
    let list = {};
    if (array.length > 0) {
        return {
            value: array[0],
            rest: arrayToList(array.slice(1))
        }
    }
    else {
        return null;
    }
}

let list = arrayToList([1, 2, 3]);
console.log(list)

const listToArray = (list) => {
    let array = [];
    if (list === null) return
    if (list.rest === null) {
        array.push(list.value);
        return array;
    }
    else {
        array.push(list.value, ...listToArray(list.rest));
        return array;
    }
}
console.log(listToArray(list))
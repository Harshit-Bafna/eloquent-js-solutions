/*
Question
    The == operator compares objects by identity. But sometimes you’d prefer to
    compare the values of their actual properties.

    Write a function deepEqual that takes two values and returns true only if they
    are the same value or are objects with the same properties, where the values
    of the properties are equal when compared with a recursive call to deepEqual.

    To find out whether values should be compared directly (use the === operator
    for that) or have their properties compared, you can use the typeof operator.
    If it produces "object" for both values, you should do a deep comparison.
    But you have to take one silly exception into account: because of a historical
    accident, typeof null also produces "object".

    let list1 = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };

    let list2 = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: undefined
            }
        }
    };
*/

const deepEqual = (list1, list2) => {
    if (list1 === list2) return true

    if (typeof list1 !== "object" || typeof list2 !== "object" || list1 === null || list2 === null) return false;

    const key1 = Object.keys(list1);
    const key2 = Object.keys(list2);

    if(key1.length !== key2.length) return false

    for(let key of key1) {
        if(!key2.includes(key) || !deepEqual(list1[key], list2[key])) return false
    }

    return true
}

let obj1 = { a: 1, b: {c: 1, d: 5} };
let obj2 = { b: {d: 5, c: 1}, a: 1 };

console.log(deepEqual(obj1, obj2));

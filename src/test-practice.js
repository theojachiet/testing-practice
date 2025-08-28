export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    sum(a, b) {
        parametersAreNumbers(a, b);
        return a + b;
    },

    substract(a, b) {
        parametersAreNumbers(a, b);
        return a - b;
    },

    divide(a, b) {
        parametersAreNumbers(a, b);
        if (b == 0) throw new Error('Divider cannot be 0');
        return a / b;
    },

    multiply(a, b) {
        parametersAreNumbers(a, b);
        return a * b;
    }
}

function parametersAreNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Parameters must be numbers !');
    }
}

export function caesarCipher(str, shift) {
    const lowercase = [..."abcdefghijklmnopqrstuvwxyz"];
    const uppercase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    let strAsArray = str.split('');
    let stringBuilder = '';

    for (let char of strAsArray) {
        if (lowercase.includes(char)) {
            const alphabetIndex = lowercase.indexOf(char);

            const newIndex = alphabetWrapper(alphabetIndex, shift);
            const newLetter = lowercase[newIndex];

            stringBuilder += newLetter;
        } else if (uppercase.includes(char)) {
            const alphabetIndex = uppercase.indexOf(char);

            const newIndex = alphabetWrapper(alphabetIndex, shift);
            const newLetter = uppercase[newIndex];

            stringBuilder += newLetter;
        } else {
            stringBuilder += char;
        }
    }

    return stringBuilder;
}

function alphabetWrapper(index, shift) {
    let newIndex = index + shift;
    while (newIndex > 25) {
        newIndex -= 26;
    }
    return newIndex;
}

export function analyzeArray(array) {
    let object = {};
    object.average = average(array);
    object.min = min(array);
    object.max = max(array);
    object.length = array.length;

    return object;
}

function average(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum / array.length;
}

function min(array) {
    let min = array[0];
    for (let number of array) {
        if (number < min) min = number;
    }
    return min;
}

function max(array) {
    let max = array[0];
    for (let number of array) {
        if (number > max) max = number;
    }
    return max;
}
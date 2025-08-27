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
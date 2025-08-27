export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    sum(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Parameters must be numbers !');
        }
        return a + b;
    }
}
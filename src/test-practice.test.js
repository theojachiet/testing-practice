import { capitalize, reverseString, calculator, caesarCipher } from './test-practice.js';

test('capitalize first letter', () => {
    let testCases = [
        {
            input: 'energY',
            expected: 'EnergY'
        },
        {
            input: 'google',
            expected: 'Google'
        },
        {
            input: 'Sauce',
            expected: 'Sauce'
        }
    ]
    testCases.forEach(function (t) {
        expect(capitalize(t.input)).toBe(t.expected);
    })
    expect(() => capitalize(78952)).toThrow();
});

test('reverse String', () => {
    expect(() => reverseString(78952)).toThrow();
    let testCases = [
        {
            input: 'energY',
            expected: 'Ygrene'
        },
        {
            input: 'google',
            expected: 'elgoog'
        },
        {
            input: 'Sauce',
            expected: 'ecuaS'
        }
    ]
    testCases.forEach(function (t) {
        expect(reverseString(t.input)).toBe(t.expected);
    })
});

test('calculator object exists', () => {
    expect(typeof calculator).toBe('object');
});

test('Sum of 2 numbers', () => {
    expect(calculator.sum(1, 2)).toBe(3);
    expect(calculator.sum(-3, 5)).toBe(2);
    expect(() => calculator.sum('ab', 'bc')).toThrow();
});

test('Substrac of 2 numbers', () => {
    expect(calculator.substract(1, 2)).toBe(-1);
    expect(calculator.substract(-3, 5)).toBe(-8);
    expect(() => calculator.substract('ab', 'bc')).toThrow();
});

test('Dividing 2 numbers', () => {
    //Normal Cases
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(() => calculator.divide('ab', 'bc')).toThrow();
    //Divinding by 0 case
    expect(() => calculator.divide(5, 0)).toThrow();
});

test('Multiplying 2 numbers', () => {
    //Normal Cases
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(10, 0.5)).toBe(5);
    expect(() => calculator.multiply('ab', 'bc')).toThrow();
});

test('Ceasar cipher simple letter shift', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('def', -3)).toBe('abc');
});

test('Ceasar cipher uppercases', () => {
    expect(caesarCipher('ABC', 3)).toBe('DEF');
    expect(caesarCipher('aBc', 3)).toBe('dEf');
});

test('Caesar cipher wrapping around the alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('xYz', 29)).toBe('aBc');
})
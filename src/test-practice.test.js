import { capitalize, reverseString, calculator } from './test-practice.js';

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
})
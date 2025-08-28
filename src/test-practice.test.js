import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './test-practice.js';

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

// CAESAR CIPHER
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
});

test('Caesar cipher special characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

//ANALYZE ARRAY
test('Analyze Array creates an object', () => {
    expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
})

test('Analyze array contains the right object keys', () => {
    expect(analyzeArray([])).toHaveProperty('average');
    expect(analyzeArray([])).toHaveProperty('min');
    expect(analyzeArray([])).toHaveProperty('max');
    expect(analyzeArray([])).toHaveProperty('length');
});

test('Analyze Array has correct average value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    expect(analyzeArray([4, 6, 8]).average).toBe(6);
    expect(analyzeArray([1, 8, 3, 16, 2, 6]).average).toBe(6);
});

test('Analyze Array has correct min value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    expect(analyzeArray([4, 6, 8]).min).toBe(4);
    expect(analyzeArray([1, 8, 3, 16, 2, -3]).min).toBe(-3);
});

test('Analyze Array has correct max value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
    expect(analyzeArray([4, 6, 8]).max).toBe(8);
    expect(analyzeArray([1, 8, 3, 16, 2, -3]).max).toBe(16);
});

test('Analyze Array has correct length value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
    expect(analyzeArray([4, 6, 8]).length).toBe(3);
    expect(analyzeArray([]).length).toBe(0);
});

test('Analyze array object equality', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})
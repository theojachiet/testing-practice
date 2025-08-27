import { capitalize } from './test-practice.js';

test('capitalize first letter', () => {
    let sample = [
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
    sample.forEach(function(t) {
        expect(capitalize(t.input)).toBe(t.expected);
    })
    expect(() => capitalize(78952)).toThrow(Error);
});
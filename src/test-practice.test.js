import { capitalize } from './test-practice.js';

test('capitalize becomes Capitalize', () => {
    let sample = [
        {
            input: 'capitalize',
            expected: 'Capitalize'
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
});
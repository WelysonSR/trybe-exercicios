const sum = require('./sum');

test('adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('adds 4 + "5" to equal string 5', () => {
    expect(() => { sum(4, "5") }).toThrow("parameters must be numbers");
});
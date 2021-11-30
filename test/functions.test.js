// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('tests a function that returns the same string with 3 exclamation marks added to the end of it', (expect) => {
    const expected1 = 'depot!!!';

    const actual1 = addExclamationPoints('depot');

    const expected2 = 'malaise!!!';

    const actual2 = addExclamationPoints('malaise');

    expect.equal(actual1, expected1, 'expected and actual should be the same string');
    expect.equal(typeof actual1, 'string', 'type of the returned value should be a string');
    expect.equal(actual2, expected2, 'expected and actual should be the same string');
    expect.equal(typeof actual2, 'string', 'type of the returned value should be a string');
});


skip('test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('tests a function that takes in a number returned it multiplied by seven', (expect) => {
    const expected1 = 21;

    const actual1 = multiplyBySeven(3);

    const expected2 = 49;

    const actual2 = multiplyBySeven(7);

    expect.equal(actual1, expected1);
    expect.equal(typeof actual1, 'number');
    expect.equal(actual2, expected2);
    expect.equal(typeof actual2, 'number');
});

test('tests a function that takes in a number, returns a number that is multiplied by 12 then halved', (expect) => {
    const expected1 = 18;
    const actual1 = multiplyBy12ThenHalve(3);

    expect.equal(actual1, expected1, 'should be the same number');
    expect.equal(typeof actual1, 'number', 'should get back a string');
});

test('tests a function that takes in 3 numbers, divides the first param by the second and the result is multiplied by the third param. should returns the result', (expect) => {
    const expected = 300;
    const actual = divideThenMultiply(200, 4, 6);

    expect.equal(actual, expected, 'should both be the same number');
    expect.equal(typeof actual, 'number', 'function should return a number');
});

test('tests a function that takes in 3 numbers, divides the first param by the second and the result is multiplied by the third param. should returns the result', (expect) => {
    const expected = [200, 4, 6];
    const actual = returnAsAnArray(200, 4, 6);

    expect.deepEqual(actual, expected, 'should both be an array');
    expect.equal(typeof actual, 'object', 'function should return an array');
});

test('tests a function that takes in 3 numbers and returns it as a string', (expect) => {
    const expected = '20046';
    const actual = returnAsAString(200, 4, 6);

    expect.deepEqual(actual, expected, 'should both be equal to each other');
    expect.equal(typeof actual, 'string', 'function should return an array');
});

test('tests a function that takes in 2 numbers and returns a string with the numbers concatenated', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 10.';
    const actual = makeLuckyGreeting(4, 6);

    expect.equal(actual, expected, 'should both be equal to each other');
    expect.equal(typeof actual, 'string', 'function should return a string');
});

test('tests a function that takes in an array and returns the second item', (expect) => {
    const expected = 'burger';
    const actual = getSecondItem([3, 'burger', 5, 'laundry', 8]);

    expect.equal(actual, expected, 'should both be equal the second item of the array --> burger');
    expect.equal(typeof actual, 'string', 'function should return a string');
});

test('tests a function that takes in an array and returns the last item', (expect) => {
    const expected1 = 8;
    const actual1 = getLastItem([3, 'burger', 5, 'laundry', 8]);

    const expected2 = 'laundry';
    const actual2 = getLastItem(['burger', 5, 'laundry']);

    expect.equal(actual1, expected1, 'should both be equal the last item of the array --> 8');
    expect.equal(typeof actual1, 'number', 'function should return a number');
    expect.equal(actual2, expected2, 'should both be equal the last item of the array --> laundry');
    expect.equal(typeof actual2, 'string', 'function should return a string');
});

test('tests a function that returns a random number between 0 and 5', (expect) => {
    let expected = 0 || 1 || 2 || 3 || 4;
    const actual1 = getRandomNumber();


    expect.equal(actual1, expected, 'should be number in expected values');
    expect.equal(typeof actual1, 'number', 'function should return a number');
});






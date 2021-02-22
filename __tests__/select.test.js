import path from 'path';
import fs from 'fs';
import select from '../src/select';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('Select tests', () => {
  test('Should work: include condition', () => {
    const selectRequestFile = readFixture('include_data.json');
    const selectRequest = JSON.parse(selectRequestFile);
    const expectedResultFile = readFixture('include_result.json');
    const expectedResult = JSON.parse(expectedResultFile);
    const recievedResult = select(selectRequest);
    expect(recievedResult).toEqual(expectedResult);
  });

  test('Should work: exclude condition', () => {
    const selectRequestFile = readFixture('exclude_data.json');
    const selectRequest = JSON.parse(selectRequestFile);
    const expectedResultFile = readFixture('exclude_result.json');
    const expectedResult = JSON.parse(expectedResultFile);
    const recievedResult = select(selectRequest);
    expect(recievedResult).toEqual(expectedResult);
  });

  test('Should work: complex sorting', () => {
    const selectRequestFile = readFixture('complex_sorting.json');
    const selectRequest = JSON.parse(selectRequestFile);
    const expectedResultFile = readFixture('complex_sorting_result.json');
    const expectedResult = JSON.parse(expectedResultFile);
    const recievedResult = select(selectRequest);
    expect(recievedResult).toEqual(expectedResult);
  });

  test('Should throw error of incorrect input format', () => {
    const selectRequestFile = readFixture('wrong_condition.json');
    const selectRequest = JSON.parse(selectRequestFile);
    const erroeMessage = 'Incorrect input format (condition field has unspecified keys: wrong)';
    expect(() => select(selectRequest)).toThrow(erroeMessage);
  });
});

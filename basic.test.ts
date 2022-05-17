import * as example from './example';

describe('jest', () => {
  test('test', () => {
    expect(example.combineAll()).toEqual(100);
  });
  test('spyOn', () => {
    jest.spyOn(example, 'func1').mockReturnValueOnce(100);
    jest.spyOn(example, 'func2').mockReturnValueOnce(100);
    jest.spyOn(example, 'func3').mockReturnValueOnce(100);
    jest.spyOn(example, 'func4').mockReturnValueOnce(100);
    expect(example.combineAll()).toEqual(400);
  });
});

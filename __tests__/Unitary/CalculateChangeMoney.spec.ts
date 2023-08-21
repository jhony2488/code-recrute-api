import {calculateChangeMoney} from '../../src/app/utils/calculateChangeMoney';

describe('CalculateChangeMoney', () => {
  it('should return the amount of change and verify that the amount of money paid is less than the amount he must pay', async () => {
    expect(calculateChangeMoney(10,30)).toStrictEqual({"changeValue": 20, "message": "Não falta dinheiro"});
  });
  it('should return the amount of change and verify that the amount of money paid is less than the amount he must pay', async () => {
    expect(calculateChangeMoney(40,30)).toStrictEqual({"changeValue": -10, "message": "Falta dinheiro"});
  });
});

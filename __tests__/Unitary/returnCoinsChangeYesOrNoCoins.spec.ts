import { returnCoinsChangeYesOrNoCoins } from '../../src/app/utils/returnCoinsChangeYesOrNoCoins';

describe('ValidationIsIntegirOrFloat.spec', () => {
  it('should return which bills or coins will be used for change', async () => {
    expect(
      returnCoinsChangeYesOrNoCoins(
        [
          { value: '5', amount: 3 },
          { value: '2', amount: 3 },
        ],
        10,
      ),
    ).toStrictEqual({"message": "Há notas suficientes para o troco.", "notas": [{"amount": 2, "value": 5}]});
  });
});

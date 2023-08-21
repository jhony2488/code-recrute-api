import { isIntegerOrFloat } from '../../src/app/utils/isIntegirOrFloat';

describe('ValidationIsIntegirOrFloat.spec', () => {
  it('should check if a value is of type float or integer and return true if so', async () => {
    expect(isIntegerOrFloat('10.01')).toBe(true);
  });
  it('should check if a value is of type float or integer and return false if not', async () => {
    expect(isIntegerOrFloat('10')).toBe(false);
  });
});

import soma from '../Class/Sum';

describe('Test function Sum', () => {
  it('Sum dois números', () => {
    const sum = soma(4, 6);
    expect(sum).toBe(10);
  });
});

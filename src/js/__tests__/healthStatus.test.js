import getHealthStatus from '../../healthStatus.js';

describe('getHealthStatus', () => {
  test('healthy при health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('wounded при health от 15 до 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('critical при health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  });
});

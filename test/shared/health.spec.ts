import { describe, it, expect } from 'vitest';
import { getHealth } from '../../CLEAN-ARCHITECTURE/src/shared/health';

describe('health', () => {
  it('returns OK', () => {
    expect(getHealth()).toBe('OK');
  });
});
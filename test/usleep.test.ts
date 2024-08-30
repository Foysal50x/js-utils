import {test, expect} from 'vitest';
import {usleep} from '../src/usleep';

test('should resolve after the specified milliseconds', async () => {
    const start = Date.now();
    await usleep(500);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(500);
  });
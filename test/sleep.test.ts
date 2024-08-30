import {test, expect} from 'vitest';
import {sleep} from '../src/sleep';

test('should resolve after the specified seconds', async () => {
    const start = Date.now();
    await sleep(1); // 1 second
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000); // 1000 milliseconds
  });
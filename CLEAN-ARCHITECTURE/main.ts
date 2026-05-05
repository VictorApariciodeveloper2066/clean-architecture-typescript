import { getHealth } from './src/shared/health';

export function checkHealth(): string {
  return getHealth();
}

console.log(checkHealth());
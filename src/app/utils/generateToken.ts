import { v4 } from 'uuid';

export function generateToken() {
  return v4();
}

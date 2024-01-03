/* 获取元组长度 */
type Length<T extends readonly any[]> = T['length'];
// type Length<T extends any> = T extends { length: infer R } ? R : never;

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
const l1: Length<tesla> = 4;
const l2: Length<spaceX> = 5;
console.log('l1', l1);
console.log('l2', l2);
// /* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

const arr1 = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const arr2 = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [Expect<Equal<Length<typeof arr1>, 4>>, Expect<Equal<Length<typeof arr2>, 5>>];
const res: cases = [true, true];
console.log('typeof arr1', typeof arr1);

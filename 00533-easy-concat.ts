// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


// ============= Your Code Here =============
type Concat<T extends unknown[], U> = T extends [...infer Inside]
  ? U extends [...infer Inside2]
  ? [...Inside, ...Inside2]
  : [...Inside, U]
  : never

// type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]
type test = Concat<[5, 6, 2], 1>;
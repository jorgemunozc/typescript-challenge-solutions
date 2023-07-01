// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]


// ============= Your Code Here =============
// type Flatten<Arr extends unknown[]> = Arr extends [[...infer X]]? 
//   Flatten<X>: 
//   Arr extends [...infer H, [...infer E]]?
//   [...H, ...Flatten<E>]:
//   Arr
type Flatten<T> = T extends []
  ? []
  : T extends [infer H, ...infer T]
  ? [...Flatten<H>, ...Flatten<T>]
  : [T]
  
  type test = Flatten<5>
  type test2 = Flatten<[1, [2]]>
  type test3 = Flatten<[[[[5 ,2]]]]>
  type test4 = Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>

  type Tuple<T> = 
    T extends [infer A, ...[infer B]]
    ?[A,B]
    : never

type test0 = Tuple<[1, 2, [3, 4], [[[5]]]]>
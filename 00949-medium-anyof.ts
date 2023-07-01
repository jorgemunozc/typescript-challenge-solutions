// ============= Test Cases =============
import type { Equal, Expect, IsFalse } from './test-utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]


// ============= Your Code Here =============
type IsObjectEmpty<O extends Object> = [keyof O] extends [never] ? true : false;
type ToBoolean<T> = T extends false | '' | { length: 0 } | '0' | 0
  ? false
  : T extends {}
  ? IsObjectEmpty<T> extends true
  ? false
  : true
  : true

// type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
//   ? ToBoolean<First> extends true
//   ? true
//   : AnyOf<Rest>
//   // : T extends [infer A]
//   : ToBoolean<T>
// // ? ToBoolean<A>
// // : ToBoolean<T>
type AnyOf<T extends any[]> = T[number] extends '' | false | '0' | 0 | { [key: string]: never } | [] | undefined | null ? false : true
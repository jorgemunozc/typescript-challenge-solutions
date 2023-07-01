// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


// ============= Your Code Here =============
type LengthOfString<S extends string, Acc extends string[] = []> = S extends `${string}${infer Rest}`
  ? LengthOfString<Rest, [...Acc, string]>
  : Acc['length'];
type test = LengthOfString<'kumiko'>

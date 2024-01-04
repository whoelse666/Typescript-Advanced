/* 实现 Exclude
实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。
从联合类型 T 中排除 U 中的类型，来构造一个新的类型。
*/


type MyExclude<T, U> = T extends U ? never : T
type A = 's' | 'n' | 'q'
type B = 's' | 'n'
type C = A extends B ? never : A // 's' | 'n' | 'q'
type D = MyExclude<A, B> // 'q'



type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
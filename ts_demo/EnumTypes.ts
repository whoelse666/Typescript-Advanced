/* //TODO 枚举类型 */
/* 
枚举类型的特点
可以给一组数值取上一个更好理解的名字；
一个枚举中只会存在几个固定的值，并不会出现超出范围的可能性；
*/

// 两种方式
/* const PostStatus = {
  Draft: 0,
  Unpublished: 1,
  Published: 2
}

const post = {
  title: 'Hello TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  status: PostStatus.Draft // 0 // 1 // 2
} */

enum PostStatus {
  Draft = 0,
  Unpublished = 1,
  Published = 2
}

const post = {
  title: 'Hello TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  status: PostStatus.Draft // 0 // 1 // 2
}


/* 数字枚举
枚举值自动基于前一个值自增，如果没指定具体数值，则从 0 开始。 
字符串枚举无法自增
 */
enum PostStatus1 {
  Draft, // 0
  Unpublished, // 1
  Published // 2
}

enum PostStatus2 {
  Draft = 6, // 6
  Unpublished, // 7
  Published2 // 8
}
const post1 = {
  title: 'Hello TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  status: PostStatus1.Draft // 0 // 1 // 2
}

console.log('post1', post1)





// 9999
enum PostStatus3 {
  Draft,
  Unpublished,
  Published
}

const post3 = {
  title: 'Hello TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  status: PostStatus.Draft // 0 // 1 // 2
}


// 常量枚举
const enum PostStatusConst {
  Draft,
  Unpublished,
  Published
}

const postConst = {
  title: 'Hello TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  status: PostStatusConst.Draft // 0 // 1 // 2
}
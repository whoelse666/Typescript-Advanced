interface Post {
  title: string;
  content: string;
  // subtitle?: string; // 可选成员
  readonly summary: string; // 只读成员
  // [属性名称（不是固定的，可以是任意名称）, 键的类型]：值的类型
  [prop: string]: string;
}
function printPost(post: Post) {
  console.log(post.title);
  console.log(post.content);
}

printPost({
  title: 'Hello TypeScript',
  content: 'A javascript superset',
  summary: 'summary'
});
interface Cache {
  // [属性名称（不是固定的，可以是任意名称）, 键的类型]：值的类型
  [prop: string]: string;
}

/* // 创建一个 cache 对象实现这个 Cache 接口
const cache: Cache = {};
// 动态添加任意的成员，这些成员都必须遵循 Cache 接口的类型约束
cache.foo = 'value1';
cache.bar = 'value2'; */
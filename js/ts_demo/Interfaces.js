"use strict";
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
printPost({
    title: 'Hello TypeScript',
    content: 'A javascript superset',
    summary: 'summary'
});
/* // 创建一个 cache 对象实现这个 Cache 接口
const cache: Cache = {};
// 动态添加任意的成员，这些成员都必须遵循 Cache 接口的类型约束
cache.foo = 'value1';
cache.bar = 'value2'; */ 

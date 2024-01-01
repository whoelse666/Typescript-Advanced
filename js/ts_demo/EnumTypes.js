"use strict";
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
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Draft"] = 0] = "Draft";
    PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
    PostStatus[PostStatus["Published"] = 2] = "Published";
})(PostStatus || (PostStatus = {}));
const post = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript.',
    status: PostStatus.Draft // 0 // 1 // 2
};
/* 数字枚举
枚举值自动基于前一个值自增，如果没指定具体数值，则从 0 开始。
字符串枚举无法自增
 */
var PostStatus1;
(function (PostStatus1) {
    PostStatus1[PostStatus1["Draft"] = 0] = "Draft";
    PostStatus1[PostStatus1["Unpublished"] = 1] = "Unpublished";
    PostStatus1[PostStatus1["Published"] = 2] = "Published"; // 2
})(PostStatus1 || (PostStatus1 = {}));
var PostStatus2;
(function (PostStatus2) {
    PostStatus2[PostStatus2["Draft"] = 6] = "Draft";
    PostStatus2[PostStatus2["Unpublished"] = 7] = "Unpublished";
    PostStatus2[PostStatus2["Published2"] = 8] = "Published2"; // 8
})(PostStatus2 || (PostStatus2 = {}));
const post1 = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript.',
    status: PostStatus1.Draft // 0 // 1 // 2
};
console.log('post1', post1);
// 9999
var PostStatus3;
(function (PostStatus3) {
    PostStatus3[PostStatus3["Draft"] = 0] = "Draft";
    PostStatus3[PostStatus3["Unpublished"] = 1] = "Unpublished";
    PostStatus3[PostStatus3["Published"] = 2] = "Published";
})(PostStatus3 || (PostStatus3 = {}));
const post3 = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript.',
    status: PostStatus.Draft // 0 // 1 // 2
};
const postConst = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript.',
    status: 0 /* PostStatusConst.Draft */ // 0 // 1 // 2
};

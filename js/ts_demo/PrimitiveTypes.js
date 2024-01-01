"use strict";
/*//TODO 原始类型  */
const a = 'foobar';
const b = 100; // 包括NaN Infinity
const c = true; // false
/*
作用域问题
不同文件可能会存在相同名称的变量，比如 a 文件定义了一个全局的变量 a，b文件也定义了一个全局变量 a，那么就会产生异常。
*/
(function () {
    const a = 'foobar';
    const b = 100;
    const c = true;
})();

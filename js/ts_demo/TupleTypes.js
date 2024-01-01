"use strict";
/*//TODO 元组类型
元组可以简单理解为是一个明确元素数量以及每一个元素类型的数组。
*/
(function () {
    // 定义元组类型的方式：可类似数组字面量
    // 这个时候表示：只能存储两个对应类型的元素
    // 访问元组当中元素的方式，可以使用数组下标的方式去访问
    const tuple = [18, 'zhangsan'];
    /*   const age = tuple[0]
      const name = tuple[1]
      console.log('age,name', age, name) */
    const [age, name] = tuple;
    // 元组一般用于一个函数中返回多个返回值
    const entries = Object.entries({
        foo: 123,
        bar: 456
    });
    console.log('entries', entries);
    const [key, value] = entries[0];
    // key => foo, value => 123
    console.log('key, value', key, value);
})();

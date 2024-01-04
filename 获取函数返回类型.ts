/* 
获取函数返回类型
不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
*/

(function () {
  type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never;

  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };

  type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"
})();

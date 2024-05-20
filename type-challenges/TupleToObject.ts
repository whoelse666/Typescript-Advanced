
/* 元组转换为对象 */

// type TupleToObject<T extends readonly string[]> = {
//   [P in T[number]]: P;
// };

type TupleToObject<T extends readonly (keyof any)[]> = { [Key in T[number]]: Key };
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const obj: result = { tesla: "tesla", "model 3": "model 3", "model X": "model X", "model Y": "model Y" };

console.log(JSON.stringify(obj));

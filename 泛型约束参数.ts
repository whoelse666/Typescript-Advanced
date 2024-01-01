const user = {
  name: 'xiaomuzhu',
  age: 20,
  Location: 'hz',
}
function handler<T extends object, K extends keyof T>
  (obj: T, propName: K) { }
handler(user, 'age')

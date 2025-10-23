// 1. 函数表达式
interface Fn {
  (a: number, b: number): number;
}
// 作为参数传入的函数，可以传入少于定义参数个数的参数
const add = (fn: Fn) => {
  return fn(1, 2);
};
add(() => {
  return 1;
});
const names = ['1', '2'];
names.forEach((item) => {
  console.log(item);
});
// 2.构造签名
// const createInstance = (fn: new () => any) => {
//   return new fn();
// };
interface PersonConstructor {
  new (name: string): Person;
}
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const createInstance = (fn: PersonConstructor) => {
  return new fn('1');
};
console.log(createInstance(Person));
// 应用：工厂模式
interface ComponentConstructor {
  new (): {
    render(): void;
  };
}
function createComponent(Component: ComponentConstructor) {
  const component = new Component();
  component.render();
}
// 测试：普通函数 签名 new 调用
interface fn {
  (name: string): void;
  // new (name: string): void;
}
function test(fn: fn) {
  fn('3');
  return;
}
test((name) => {
  console.log(name);
  console.log('1');
});

interface User {
  name: string;
  age: number;
}
// 函数重载
function createUser(name: string, age: number): User;
function createUser(config: User): User;
function createUser(nameOrConfig: string | User, age?: number): User {
  if (typeof nameOrConfig === 'string') {
    return {
      name: nameOrConfig,
      age: age!,
    };
  } else {
    return {
      name: nameOrConfig.name,
      age: nameOrConfig.age,
    };
  }
}
createUser('kobe', 24);
createUser({
  name: 'kobe',
  age: 24,
});
// createUser('kobe');
// 实例：实现一个通用的 getLen 工具函数
/* 
1.传入 字符串 → 返回 string.length
2.传入 数组 → 返回 array.length
3.禁止传入其他无 length 属性的类型
*/
function getLen1(arg: string | any[]): number {
  return arg.length; // ✅ string 和 array 都有 .length
}
function getLen(arg: string): number;
function getLen(arg: any[]): number;
function getLen(arg: string | any[]): number {
  return arg.length;
}
// 鸭子类型
function getLen3(arg: { length: number }): number {
  return arg.length;
}

export {};

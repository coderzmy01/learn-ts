// let obj: Object;

// obj = true;
// obj = "hi";
// obj = 1;
// obj = { foo: 123 };
// obj = [1, 2];
// obj = (a: number) => a + 1;

// let obj2: object;
// // 普通标准对象
// // obj = true;
// // obj = new RegExp("sss");

// type voidFunc = () => void;

// const f: voidFunc = () => {
//   return 123;
// };

// f() * 2 // 报错

// function f():void {
//   return true; // 报错
// }

// const f3 = function ():void {
//   return true; // 报错
// };

// 函数重载
// function format(val: number): string;
// function format(val: Date): string;
// function format(val: string): string;
// function format(val: number | Date | string) {
//   return val + "";
// }

// interface 接口
// interface Person {
//   weight: number;
//   height: number;
// }
// type A = Person["weight"];
// // const a: A = "22";

// 对象的属性索引
// interface A {
//   [key: string]: boolean;
// }
// const a: A = {
//   isNumber: !!1,
// };

// 对象的方法处理
// interface B {
//   (x: number): string;
// }
// const fn: B = function (x: number) {
//   return x + "";
// };
// console.log(fn(12));
// // any,unknown,void,never

// // 面向对象
// interface ObjectConstructor {
//   create(o: object | null): any;
// }
// interface Object {
//   hasOwnProperty(v: PropertyKey): boolean;
//   readonly __proto__: string;
//   // 可添加属性
//   [key: string]: any;
// }

// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//   }
// }
// const p1: Point = new Point(1, 2);

// 存取器操作

// class C {
//   _name = "-";
//   get name() {
//     return this._name;
//   }
//   // 类型兼容
//   set name(val: number | string) {
//     this._name = String(val);
//   }
// }
// const c1 = new C();
// console.log(c1.name);
// c1.name = "xx";

// 属性索引
// type booleanFnc = (s: string) => boolean;
// class S {
//   [s: string]: boolean | ((s: string) => boolean);
//   get(s: string) {
//     return true;
//   }
// }

// interface Country {
//   name: string;
//   capital: string;
//   fireWar(reason: number): string;
// }
// class Country implements Country {
//   name = "china";
//   capital: string;

//   fireWar(reason: number): string {

//   }
//   peace(reason: string) {
//     return reason;
//   }
// }

// interface Box {
//   x: number;
//   y?: string;
// }
// class C implements Box {
//   x: number;
//   y?: string;
// }
// const c1 = new C();
// console.log(c1.y);
// interface Flyable {
//   foo: number;
//   level: number;
// }
// interface Swimmable extends Flyable {}

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
const createPoint = (x: number, y: number, PointClass: typeof Point) => {
  return new PointClass(x, y);
};

// 结构类型判断
class Person {
  name: string;
}
class Customer {
  name: string;
  like: string;
}
// 正确
// const cust: Customer = new Person();

// 派生属性需要继承原类，而不是结构判断
// class A {
//   protected name = "a";
// }
// class B extends A {
//   protected name = "b";
// }
// class C {
//   protected name = "c";
// }
// const a: A = new B();
// // const c: A = new C();

// 泛型
// function getFirstElement<T>(arr: T[]): T {
//   return arr[0]!;
// }
// getFirstElement([1, 2, 3]);

// function comb<T>(a: T[], b: T[]): T[] {
//   return [...a, ...b];
// }
// const a = comb<string | number>([1, 2], ['a', 'b']);
// 多个类型参数
function map<T, U>(a: T[], fn: (item: T) => U): U[] {
  return a.map(fn);
}
/* 
总之，泛型可以理解成一段类型逻辑，需要类型参数来表达。有了类型参数以后，可以在输入类型与输出类型之间，建立一一对应关系。
*/

// 1.函数的泛型写法
// let fn: <T>(num: T) => number = <T>(x: T) => {
//   return 2;
// };

// 2.接口的泛型写法
// interface Shape<T> {
//   compareTo(value: T): number;
// }
// class Rectangle implements Shape<Rectangle> {
//   compareTo(value: Rectangle): number {
//     return 2;
//   }
// }

// interface Fn {
//   <T>(...arg: T[]): [];
// }
// let f: Fn = <T>(...args: T[]) => {
//   console.log(args.at(0));
//   console.log(args.at(1));
//   console.log(args.at(2));
//   return [];
// };
// f<number>(1, 2, 3);

// const Container = class Container<T> {
//   value: T;
//   constructor(value: T) {
//     this.value = value;
//   }
// };
// const c1 = new Container<number>(1);
// console.log(c1.value);

// class C<T> {
//   a!: T;
//   add!: (value: T) => T;
// }
// const c = new C<number>();
// c.a = 12;
// c.add = (val) => {
//   return val;
// };

// 或者如果想要一个类
type MyClassConstructor = new (...args: any[]) => MyClass;
class MyClass {
  constructor(...args: any[]) {
    // 初始化逻辑
  }
  getValue(): number {
    return 2;
  }
}
const sort: MyClassConstructor = MyClass;

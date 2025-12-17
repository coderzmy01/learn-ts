// 1.原型继承
// let dogs = {
//   eats: true,
// };
// let animal = {
//   run: true,
//   walk() {
//     console.log("any animal can walk");
//   },
// };
// dogs.walk = () => console.log("dog walk");
// dogs.__proto__ = animal;
// // console.log(dogs.run);
// dogs.walk();

// 在写入操作时，不更改祖先的属性
// let user = {
//   firstName: "coder",
//   lastName: "why",
//   set fullName(value) {
//     console.log(this, "set fullname called");
//     [this.firstName, this.lastName] = value.split(" ");
//   },
//   get fullName() {
//     console.log(this, "get fullname called");
//     return this.firstName + this.lastName;
//   },
// };
// let admin = {
//   __proto__: user,
//   permission: ["xx", "xxxy"],
//   access_control: "xx",
// };
// console.log(admin.fullName);
// admin.fullName = "you yuxi";
// console.log(user.fullName);
// console.log(admin.fullName);

// 原型继承 不会影响this 绑定
// let animal = {
//   sleep() {
//     this.isSleep = true;
//   },
// };
// let rabbit = {
//   name: 'white rabbit',
//   __proto__: animal,
// };
// rabbit.sleep();
// console.log(animal.isSleep);
// console.log(rabbit.isSleep);

// for in 遍历整个原型链
// 对象描述符的使用
const obj = {
  a: 12,
  b: 23,
};
// Object.defineProperty(obj, 'a', {
//   writable: false, // 是否可以写入
//   enumerable: true, // 是否可以枚举
//   configurable: true, // 是否可以删除属性
//   value: 12,
// });
// let animal = {
//   jump: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jump: true,
// };
// console.log(rabbit.jump);
// delete rabbit.jump;
// console.log(rabbit.jump);
// delete animal.jump;
// console.log(rabbit.jump);
// let head = {
//   glasses: 1,
// };

// let table = {
//   __proto__: head,
//   pen: 3,
// };

// let bed = {
//   __proto__: table,
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   __proto__: bed,
//   money: 2000,
// };
// console.log(pockets.pen);

// let hamster = {
//   stomach: [],
//   eat(value) {
//     this.stomach = [value];
//   },
// };
// let speedy = Object.create(hamster);
// let lazy = Object.create(hamster);
// speedy.eat("apple");
// console.log(speedy.stomach);
// console.log(lazy.stomach);
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};
let r1 = new Rabbit();
// Rabbit.prototype = {};
// Rabbit.prototype.eats = false;
// delete r1.eats;
console.log(r1.eats);

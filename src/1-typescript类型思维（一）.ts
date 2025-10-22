// 1.void类型
type ExcuteFn = (...args: any[]) => void;
const delayFn = (fn: ExcuteFn, wait: number) => {
  setTimeout(() => {
    fn();
  }, wait);
};
delayFn(() => {
  console.log("hello world");
  return "hello world";
}, 1000);
let state: any = undefined;

// 2.元组
function useState<T>(initValue: T): [T, (newValue: T) => void] {
  if (state !== undefined) {
    return [state, setState];
  }
  state = initValue;
  function setState(newValue: T) {
    state = newValue;
  }
  return [state, setState];
}
const [count, setCount] = useState(0);
console.log(count);

// 3.交叉类型
interface A {
  a: string;
}
interface B {
  b: number;
}
type C = A & B;
const c: C = { a: "hello", b: 1 };

// 4.as : 类型断言
const imgEl = document.querySelector(".img") as HTMLImageElement;
const a: number = 1;
const b: string = "1";
const x: string = a as any as string;

// 5.非空判断 ！
interface D {
  a?: string;
}
const xx: D = {};
console.log(xx?.a!.toUpperCase());
export {};

// 1.字面量类型的使用
type Name = "zhangsan" | "lisi" | "wangwu";
let name: Name = "zhangsan";
type Method = "get" | "post";
function request(url: string, method: Method) {
  console.log(url, method);
}
// request("http://www.baidu.com", "get");
const config = {
  url: "http://www.baidu.com",
  method: "get",
};
const config2 = {
  url: "http://www.baidu.com",
  method: "get",
  data: {},
  headers: {},
} as const;
// 字面量推断
request(config.url, config.method as Method);
request(config2.url, config2.method);



# TypeScript 教程

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## 📖 简介

这是一个全面的 TypeScript 学习教程，从基础到高级，帮助开发者系统地掌握 TypeScript 编程语言。无论你是 JavaScript 开发者想要提升技能，还是初学者想要学习现代前端开发，这个教程都将为你提供清晰的指导。

## 🎯 教程特点

- **循序渐进**：从基础语法到高级特性
- **实战驱动**：包含大量实际案例和项目
- **最新标准**：基于 TypeScript 5.0+ 版本
- **最佳实践**：涵盖工程化和团队协作规范

## 📚 教程目录

### 第一部分：基础入门

1. [TypeScript 简介与环境搭建](./docs/01-getting-started/)
2. [基础类型系统](./docs/02-basic-types/)
3. [接口与类型别名](./docs/03-interfaces-types/)
4. [函数类型详解](./docs/04-functions/)
5. [类与面向对象编程](./docs/05-classes/)

### 第二部分：进阶特性

6. [泛型编程](./docs/06-generics/)
7. [类型兼容性与类型守卫](./docs/07-type-compatibility/)
8. [高级类型技巧](./docs/08-advanced-types/)
9. [装饰器与元数据](./docs/09-decorators/)
10. [模块与命名空间](./docs/10-modules-namespaces/)

### 第三部分：工程实践

11. [配置 tsconfig.json](./docs/11-tsconfig/)
12. [与前端框架集成](./docs/12-frameworks/)
13. [Node.js 后端开发](./docs/13-nodejs/)
14. [工具链与构建优化](./docs/14-tooling/)
15. [测试与调试](./docs/15-testing-debugging/)

### 第四部分：实战项目

16. [全栈项目实战](./projects/full-stack-app/)
17. [工具库开发](./projects/utility-library/)
18. [类型定义文件编写](./projects/type-definitions/)

## 🚀 快速开始

### 环境要求

- Node.js 16.0+
- npm 或 yarn 或 pnpm

### 安装 TypeScript

```bash
# 全局安装
npm install -g typescript

# 或项目本地安装
npm install --save-dev typescript

# 验证安装
tsc --version
```

### 第一个 TypeScript 程序

```typescript
// hello.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message = greet("TypeScript");
console.log(message);
```

### 编译运行

```bash
# 编译 TypeScript
tsc hello.ts

# 运行 JavaScript
node hello.js
```

## 🛠️ 开发工具推荐

### 编辑器/IDE

- **Visual Studio Code** - 官方推荐，完美支持 TS
- **WebStorm** - 功能强大的商业 IDE
- **Sublime Text** - 轻量级编辑器

### 必备插件

- TypeScript Importer
- Auto Import
- Error Lens
- Bracket Pair Colorizer

## 📖 学习资源

### 官方文档

- [TypeScript 官网](https://www.typescriptlang.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### 推荐书籍

- 《Programming TypeScript》
- 《Effective TypeScript》
- 《TypeScript 编程》

## 🤝 贡献指南

我们欢迎任何形式的贡献！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 更新日志

详细更新记录请查看 [CHANGELOG.md](./CHANGELOG.md)

## 🏆 贡献者

感谢所有为本项目做出贡献的开发者！

[![Contributors](https://contrib.rocks/image?repo=your-username/typescript-tutorial)](https://github.com/your-username/typescript-tutorial/graphs/contributors)

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](./LICENSE) 文件了解详情

## ❓ 常见问题

请查看 [FAQ.md](./docs/FAQ.md) 获取常见问题解答，或提交 Issue。

# 📝 Todo CLI

一个简单实用的命令行待办事项管理工具，使用 Node.js 编写。

## ✨ 功能

- ➕ 添加待办任务
- 📋 列出所有任务
- ✅ 标记任务完成
- 🗑️ 删除任务
- 💾 本地 JSON 存储

## 🚀 快速开始

### 前置要求

- Node.js v12 或更高版本

### 安装

```bash
# 克隆仓库
git clone https://github.com/18792938Aa/my-first-repo.git
cd my-first-repo

# 安装依赖（可选，本项目无外部依赖）
npm install

# 全局安装（可选，方便直接使用 todo 命令）
npm link
```

## 📖 使用方法

### 查看帮助

```bash
node index.js help
```

### 添加任务

```bash
node index.js add 学习 Node.js
node index.js add 写一个 CLI 工具
node index.js add 提交到 GitHub
```

### 列出任务

```bash
node index.js list
```

输出示例：
```
📋 待办事项列表:

  1. ⬜ 学习 Node.js
  2. ⬜ 写一个 CLI 工具
  3. ⬜ 提交到 GitHub
```

### 标记完成

```bash
node index.js done 1
```

输出：
```
🎉 任务完成: 学习 Node.js
```

### 删除任务

```bash
node index.js delete 2
```

## 📁 项目结构

```
my-first-repo/
├── index.js       # 主程序
├── package.json   # 项目配置
├── todos.json     # 数据存储（自动生成）
└── README.md      # 说明文档
```

## 🛠 技术栈

- Node.js
- 原生 JavaScript (无外部依赖)
- JSON 文件存储

## 📝 学习要点

这个项目涵盖了 Node.js 的基础知识点：

1. **命令行参数处理** - `process.argv`
2. **文件系统操作** - `fs` 模块
3. **路径处理** - `path` 模块
4. **JSON 数据存储**
5. **CLI 交互设计**

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

⭐ 如果这个项目对你有帮助，欢迎 Star！

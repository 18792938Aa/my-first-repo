#!/usr/bin/env node

/**
 * Todo CLI - 一个简单的命令行待办事项工具
 * 
 * 用法:
 *   node index.js list          - 列出所有待办
 *   node index.js add <任务>    - 添加新任务
 *   node index.js done <编号>   - 标记任务完成
 *   node index.js delete <编号> - 删除任务
 */

const fs = require('fs');
const path = require('path');

// 数据文件路径
const DATA_FILE = path.join(__dirname, 'todos.json');

// 读取待办列表
function loadTodos() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('读取数据失败:', err.message);
  }
  return [];
}

// 保存待办列表
function saveTodos(todos) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2), 'utf8');
  } catch (err) {
    console.error('保存数据失败:', err.message);
  }
}

// 显示帮助信息
function showHelp() {
  console.log(`
📝 Todo CLI - 待办事项管理工具

用法:
  node index.js list              列出所有待办
  node index.js add <任务内容>    添加新任务
  node index.js done <编号>       标记任务为完成
  node index.js delete <编号>     删除任务
  node index.js help              显示帮助信息

示例:
  node index.js add 学习 Node.js
  node index.js list
  node index.js done 1
`);
}

// 列出所有待办
function listTodos() {
  const todos = loadTodos();
  
  if (todos.length === 0) {
    console.log('📭 暂无待办事项，添加一个吧！');
    return;
  }
  
  console.log('\n📋 待办事项列表:\n');
  todos.forEach((todo, index) => {
    const status = todo.done ? '✅' : '⬜';
    console.log(`  ${index + 1}. ${status} ${todo.text}`);
  });
  console.log('');
}

// 添加待办
function addTodo(text) {
  if (!text) {
    console.log('❌ 请提供任务内容，例如: node index.js add 学习 Node.js');
    return;
  }
  
  const todos = loadTodos();
  todos.push({
    id: Date.now(),
    text: text,
    done: false,
    createdAt: new Date().toISOString()
  });
  
  saveTodos(todos);
  console.log(`✅ 已添加任务: ${text}`);
}

// 标记完成
function doneTodo(index) {
  const todos = loadTodos();
  const idx = parseInt(index) - 1;
  
  if (isNaN(idx) || idx < 0 || idx >= todos.length) {
    console.log('❌ 无效的编号，请使用 list 查看任务列表');
    return;
  }
  
  todos[idx].done = true;
  saveTodos(todos);
  console.log(`🎉 任务完成: ${todos[idx].text}`);
}

// 删除待办
function deleteTodo(index) {
  const todos = loadTodos();
  const idx = parseInt(index) - 1;
  
  if (isNaN(idx) || idx < 0 || idx >= todos.length) {
    console.log('❌ 无效的编号，请使用 list 查看任务列表');
    return;
  }
  
  const deleted = todos.splice(idx, 1);
  saveTodos(todos);
  console.log(`🗑️  已删除任务: ${deleted[0].text}`);
}

// 主程序
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'list':
    case 'ls':
      listTodos();
      break;
    case 'add':
      addTodo(args.slice(1).join(' '));
      break;
    case 'done':
    case 'complete':
      doneTodo(args[1]);
      break;
    case 'delete':
    case 'del':
    case 'rm':
      deleteTodo(args[1]);
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      if (command) {
        console.log(`❌ 未知命令: ${command}`);
      }
      showHelp();
  }
}

main();

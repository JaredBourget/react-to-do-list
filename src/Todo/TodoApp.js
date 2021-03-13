import React, { useState } from 'react'; 
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

import TodoList from './TodoList/TodoList';

function TodoApp() {
  const initalTodos = [
    {id: 1, task: 'Make a todo list', completed: false },
    {id: 2, task: 'Play chess', completed: true },
    {id: 3, task: 'Finish 100 years of solitude', completed: false },
  ];

  const [todos, setTodos] = useState(initalTodos);

  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <AppBar color='primary' position='static' style={{height: '4rem'}}>
        <ToolBar>
          <Typography color='inherit'>Todos</Typography>
        </ToolBar>
      </AppBar>
      <TodoList tasks={todos} ></TodoList>
    </Paper>
  )
}

export default TodoApp;


// - TodoApp
//   - TodoForm
//   - TodoList
//     -TodoItem


// id, task, completed, delete
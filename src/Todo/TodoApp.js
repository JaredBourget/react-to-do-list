import React, { useState } from 'react';
import { Paper, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';

function TodoApp() {
  const initalTodos = [
    { id: 1, task: 'Make a todo list', completed: false },
    { id: 2, task: 'Play chess', completed: true },
    { id: 3, task: 'Finish 100 years of solitude', completed: false },
  ];

  const [todos, setTodos] = useState(initalTodos);

  const addTodo = (val) => {
    setTodos([...todos, { id: 4, task: val, completed: false }])
  }

  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <AppBar color='primary' position='static' style={{ height: '4rem' }}>
        <Toolbar>
          <Typography color='inherit'>Todos</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center'>
        <Grid item xs={11} md={8} lg={6}>

          <TodoList tasks={todos} ></TodoList>
          <TodoForm addTodo={addTodo}></TodoForm>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;


// - TodoApp
//   - TodoForm
//   - TodoList
//     -TodoItem


// id, task, completed, delete
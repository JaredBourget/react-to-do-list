import React from 'react';
import { List, Divider, Paper } from '@material-ui/core';

import TodoItem from '../TodoItem/todoItem';

function TodoList(props) {
  return (
    <Paper style={{marginTop: '1rem'}}>
      <List>
        {props.tasks.map((todo) => (
          <>
          <TodoItem key={todo.id} task={todo.task} completed={todo.completed}></TodoItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;
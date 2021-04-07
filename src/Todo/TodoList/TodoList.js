import React from 'react';
import { ListItem, ListItemText, List, Divider, Paper } from '@material-ui/core';

function TodoList(props) {
  return (
    <Paper style={{marginTop: '1rem'}}>
      <List>
        {props.tasks.map((task) => (
          <>
            <ListItem key={task.id}>
              <ListItemText>{task.id}</ListItemText>
              <ListItemText>{task.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;
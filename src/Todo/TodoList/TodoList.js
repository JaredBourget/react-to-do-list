import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.tasks.map((task) => (
          <>
            <ListItem>
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
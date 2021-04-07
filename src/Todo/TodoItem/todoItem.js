import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';

function TodoItem(props) {
  console.log(props)

  const listStyle = {
    backgroundColor: props.completed ? 'green' : 'inherit'
  }

  return (
    <ListItem style={listStyle}>
      <ListItemText>
        {props.task}
      </ListItemText>
    </ListItem>
  )
}

export default TodoItem;
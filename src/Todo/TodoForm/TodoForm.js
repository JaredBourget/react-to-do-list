import React from 'react';
import { FormControl, Input, InputLabel, Paper, Button } from '@material-ui/core';
import valueChange from '../../hooks/useInputState';

function TodoForm(props) {
  const [value, handleChange, reset] = valueChange('');
  const basicStyling = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <Paper
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingRight: '1rem',
        paddingLeft: '1rem'
      }}
    >
      <form 
        onSubmit={e => {
          e.preventDefault();
          props.addTodo(value);
          reset();
        }}
        style={basicStyling}
      >
        <FormControl style={ basicStyling }>
          <InputLabel>New Todo</InputLabel>
          <Input value={value} onChange={handleChange} placeholder='new todo text' />
            <div style={{
              display: 'flex',
              marginTop: '1rem',
              marginBottom: '1rem',
              width: '100%',
              justifyContent: 'space-around'
            }}>
              <Button variant='contained' color='secondary' type='button' onClick={reset}>Reset</Button>
              <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </div>
        </FormControl>
      </form>
    </Paper>
  )
}

export default TodoForm;
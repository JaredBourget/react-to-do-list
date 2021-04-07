import { useState } from 'react';

export default valueChange => {
  const [value, setValue] = useState(valueChange);
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const reset = () => {
    setValue('');
  }

  return [ value, handleChange, reset ];
}
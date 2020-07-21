import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
    className = {styles.input}
    id="filled-basic"
    label="What needs to be done?"
    variant="filled"
    size="small"
  />
</div>);

export default InputItem;
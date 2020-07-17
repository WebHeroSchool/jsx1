import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const InputItem = () => (<div className = {styles.input}>
  <TextField
    className = {styles.comp}
    id="filled-basic"
    label="What needs to be done?"
    variant="filled"
    size="small"
  />
  <span className = {styles.addIcon}>
    <AddCircleOutlineOutlinedIcon color="primary" fontSize = 'large' />
  </span>
</div>);

export default InputItem;
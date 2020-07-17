import React from 'react';
import styles from '../App/App.module.css';
import classnames from 'classnames';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const Item = ({ value, isDone }) => (
  <span className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    {value}
    <div className = {styles.icons}>
      <DeleteForeverOutlinedIcon />
    </div>
</span>);

export default Item;
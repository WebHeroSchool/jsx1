import React from 'react';
import styles from '../App/App.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (<span className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    <div className = {styles.list}>
      <div>
      <Checkbox
        color = 'primary'
        checked = {isDone}
        onClick = {() => onClickDone(id)}
      />
      {value}
      </div>
      <div className = {styles.icons}>
        <DeleteForeverOutlinedIcon
          className = {styles.clear}
          onClick = {() => onClickDelete(id)}
        />
      </div>
    </div>
</span>);

Item.defaultProps = {
  isDone: false,
};

export default Item;
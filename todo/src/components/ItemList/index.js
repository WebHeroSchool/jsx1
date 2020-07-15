import React from 'react';
import Item from '../Item';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './ItemList.module.css';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const ItemList = ({ items }) => (<ul>
  {items.map(item => (<li key = {item.value} className = {styles.list}>
      <Checkbox />
      <Item
        value = {item.value}
        isDone = {item.isDone}
      />
      <div className = {styles.icons}>
        <DeleteForeverOutlinedIcon />
      </div>
  </li>))}

</ul>);

export default ItemList;
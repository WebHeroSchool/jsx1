import React from 'react';
import Item from '../Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul>
  {items.map(item => (<li key = {item.id} className = {styles.list}>
    <Item
      value = {item.value}
      isDone = {item.isDone}
      id = {item.id}
      onClickDone = {onClickDone}
      onClickDelete = {onClickDelete}
    />
  </li>))}
</ul>);

export default ItemList;
import React from 'react';
import Item from '../Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (<ul>
  {items.map(item => (<li key = {item.value} className = {styles.list}>
    <Item
      value = {item.value}
      isDone = {item.isDone}
    />
  </li>))}
</ul>);

export default ItemList;

import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem = {todoItem} /></li>
  <li><Item todoItem = {'Выполнить 3-5 заданий в школе'} /></li>
  <li><Item todoItem = {'Похвалить себя'} /></li>
</ul>);

export default ItemList;
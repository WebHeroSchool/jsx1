import React, { useState } from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import styles from './Todo.module.css';

const header = (<h1 className = {styles.header}>Notes:</h1>);
const Todo = () => {
  // Переделать
  const initialState = { items: [] };
  const [items, setItems] = useState(initialState.items);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if(item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    })
    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const onClickAdd = value => {
    const newTodoItem = [
      ...items,
      {
        value,
        isDone: false,
        id: items.length + 1,
      }
    ];
    setItems(newTodoItem);
  };

  return (<div className = {styles.body}>
    {header}
    <InputItem
      onClickAdd = {onClickAdd}
      items = {items}
    />
    <ItemList
      items = {items}
      onClickDone = {onClickDone}
      onClickDelete = {onClickDelete}
    />
    <Footer count = {items.length} />
  </div>);
};

export default Todo;
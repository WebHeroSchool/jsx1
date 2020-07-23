import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import styles from './Todo.module.css';

const header = (<h1 className = {styles.header}>Notes:</h1>);
const Todo = () => {
  const initialState = {
    items: [
      {
        value: 'Написать приложение',
        isDone: false,
        id: 1,
      },
      {
        value: 'Выполнить 3-5 заданий в школе',
        isDone: true,
        id: 2,
      },
      {
        value: 'Похвалить себя',
        isDone: true,
        id: 3,
      }
    ],
  };

  const [items, setItems] = useState(initialState.items);

  useEffect(() => console.log('update'));
  useEffect(() => {
    console.log('mount');
  }, []);

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
    <InputItem onClickAdd = {onClickAdd} />
    <ItemList
      items = {items}
      onClickDone = {onClickDone}
      onClickDelete = {onClickDelete}
    />
    <Footer count = {items.length} />
  </div>);
};

export default Todo;
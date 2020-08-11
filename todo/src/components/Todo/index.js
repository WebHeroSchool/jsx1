import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
    filter: 'All',
  };
  const [items, setItems] = useState(initialState.items);
  const [filter, setFilter] = useState(initialState.filter);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

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
        value: value,
        isDone: false,
        id: items.length + 1,
      }
    ];
    setItems(newTodoItem);
  };

  let filterItems;
  let count;
  switch(filter) {
    case 'Active':
      filterItems = items.filter(item => !item.isDone);
      count = items.filter(item => item.isDone === false).length;
      break;
    case 'Completed':
      filterItems = items.filter(item => item.isDone);
      count = items.filter(item => item.isDone === true).length;
      break;
    default:
      filterItems = items;
      count = items.length;
  };

  const onFilterChange = name => setFilter(name);

  return (<div className = {styles.body}>
    <h1 className = {styles.header}>Notes:</h1>
    <InputItem
      onClickAdd = {onClickAdd}
      items = {items}
    />
    <div>
      {items.length === 0 ? (
        <div className = {styles.wrapImage}>
          <div className = {styles.image}></div>
          <h3 className = {styles.subtitle}>Добавь задачу!</h3>
        </div>
      ) : (
        <ItemList
          items = {items}
          onClickDone = {onClickDone}
          onClickDelete = {onClickDelete}
          filterItems = {filterItems}
          name = {filter}
        />
      )}
    </div>
    <Footer
      count = {count}
      onFilterChange = {onFilterChange}
    />
  </div>);
};

export default Todo;
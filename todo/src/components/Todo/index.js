import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import styles from './Todo.module.css';

const header = (<h1 className = {styles.header}>Notes:</h1>);
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

  const filterItems = (items, filter) => {
    switch(filter) {
      case 'Active':
        return items.filter(item => !item.isDone);
      case 'Completed':
        return items.filter(item => item.isDone);
      default:
        return items;
    }
  };

  const onFilterChange = name => setFilter(name);

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
    <Footer
      count = {items.length}
      onFilterChange = {onFilterChange}
      filterItems = {filterItems}
      filter = {filter}
    />
  </div>);
};

export default Todo;
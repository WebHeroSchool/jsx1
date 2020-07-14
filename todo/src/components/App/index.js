import React from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import styles from './App.module.css';

const todoItem = 'Написать приложение';
const header = (<h1 className = {styles.header}>Заметки:</h1>);
const App = () => {
  const items = [
    {
      value: todoItem,
      isDone: false,
    },
    {
      value: 'Выполнить 3-5 заданий в школе',
      isDone: true,
    },
    {
      value: 'Похвалить себя',
      isDone: true,
    }
  ];

  return (<div className = {styles.body}>
    {header}
    <InputItem />
    <ItemList items = {items} />
    <Footer count = {3} />
  </div>);
}

export default App;
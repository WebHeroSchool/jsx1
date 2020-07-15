import React from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import styles from './App.module.css';

const todoItem = 'Написать приложение';
const header = (<h1 className = {styles.header}>Заметки:</h1>);
class App extends React.Component {
  state = {
    items: [
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
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render() {
    return (<div className = {styles.body}>
      {header}
      <InputItem />
      <ItemList items = {this.state.items} onClickDone = {this.onClickDone} />
      <Footer count = {3} />
    </div>);
  }
};

export default App;
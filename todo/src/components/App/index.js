import React from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import styles from './App.module.css';

const todoItem = 'Написать приложение';
const header = (<h1 className = {styles.header}>Notes:</h1>);
class App extends React.Component {
  state = {
    items: [
      {
        value: todoItem,
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
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if(item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    })
    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItemList });
  };

  render() {
    return (<div className = {styles.body}>
      {header}
      <InputItem />
      <ItemList
        items = {this.state.items}
        onClickDone = {this.onClickDone}
        onClickDelete = {this.onClickDelete}
      />
      <Footer count = {3} />
    </div>);
  }
};

export default App;
import React from 'react';
import PropTypes from 'prop-types';
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
    ],
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

  onClickDelete = id => this.setState(state => ({items: state.items.filter(item => item.id !== id)}));

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1,
      }
    ],
    count: state.count + 1
  }));

  render() {
    return (<div className = {styles.body}>
      {header}
      <InputItem onClickAdd = {this.onClickAdd} />
      <ItemList
        items = {this.state.items}
        onClickDone = {this.onClickDone}
        onClickDelete = {this.onClickDelete}
      />
      <Footer />
    </div>);
  }
};

App.defaultProps = {
  id: 1,
};

App.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
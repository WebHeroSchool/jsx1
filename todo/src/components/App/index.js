import React from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';

const todoItem = 'Написать приложение';
const header = (<h1>Заметки:</h1>);
const App = () => (<div>
  {header}
  <InputItem />
  <ItemList todoItem = {todoItem} />
  <Footer count = {3} />
</div>);

export default App;
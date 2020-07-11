import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Написать приложение';
const header = (<h1>Заметки:</h1>);
const App = () => (<div>
  {header}
  <InputItem />
  <ItemList todoItem = {todoItem} />
  <Footer count = {3} />
</div>);

export default App;
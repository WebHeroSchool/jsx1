import React from 'react';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';

const header = (<h1>Заметки:</h1>);
const App = () => (<div>
  {header}
  <InputItem />
  <ItemList />
  <Footer />
</div>);

export default App;
import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const header = (<h1>Заметки:</h1>);
const App = () => (<div>
  {header}
  <InputItem />
  <ItemList />
  <Footer />
</div>);

export default App;
import React from 'react';

const element = (<h2>Hello World!</h2>);
const ItemList = () => (<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>);

const App = () => (<div>
  {element}
  <ItemList />
</div>); 

export default App;
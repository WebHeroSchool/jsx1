import React from 'react';
import styles from './App.module.css';
import Todo from '../Todo';
import About from '../About';
import Contacts from '../Contacts';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () =>
  (<Router>
    <div className = {styles.wrap}>
      <Card className = {styles.sidebar}>
        <MenuList>
          <Link to = '/' className = {styles.link}><MenuItem>About</MenuItem></Link>
          <Link to = '/todo' className = {styles.link}><MenuItem>Todo</MenuItem></Link>
          <Link to = '/contacts' className = {styles.link}><MenuItem>Contacts</MenuItem></Link>
        </MenuList>
      </Card>
      <Card className = {styles.content}>
        <Route path = '/' exact component = {About} />
        <Route path = '/todo' component = {Todo} />
        <Route path = '/contacts' component = {Contacts} />
      </Card>
    </div>
  </Router>);

export default App;
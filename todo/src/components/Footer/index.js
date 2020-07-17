import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div>
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      centered
    >
    <div className = {styles.tab}>
      <Tab label="All" />
      <Tab label="Active" />
      <Tab label="Completed" />
    </div>
    </Tabs>
    <div className = {styles.block}>
      <span className = {styles.count}>Осталось дел: {count}</span>
      <span className = {styles.delete}>Clear completed</span>
    </div>
</div>);

export default Footer;
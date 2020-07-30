import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div>
    <div className = {styles.tab}>
      <Tab label="All" />
      <Tab label="Active" />
      <Tab label="Completed" />
    </div>
    <div className = {styles.block}>
      <span className = {styles.count}>{count} items left</span>
      <span className = {styles.delete}>Clear completed</span>
    </div>
</div>);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Footer;
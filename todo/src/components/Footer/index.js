import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import styles from './Footer.module.css';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const Footer = ({ onFilterChange, count }) => (<div>
    <div className = {styles.tab}>
      <Badge
        color="secondary"
        badgeContent={count}
        className = {styles.iconCount}
      >
        <MailIcon />
      </Badge>
      <Tab
        label="All"
        onClick = {() => onFilterChange('All')}
        className = {styles.button}
      />
      <Tab
        label="Active"
        onClick = {() => onFilterChange('Active')}
        className = {styles.button}
      />
      <Tab
        label="Completed"
        onClick = {() => onFilterChange('Completed')}
        className = {styles.button}
      />
    </div>
</div>);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Footer;
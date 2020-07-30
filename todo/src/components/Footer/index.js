import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import styles from './Footer.module.css';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const Footer = ({ count }) => (<div>
    <div className = {styles.tab}>
      <Badge color="secondary" badgeContent={count}>
        <MailIcon />
      </Badge>
      <Tab label="All" />
      <Tab label="Active" />
      <Tab label="Completed" />
    </div>
</div>);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Footer;
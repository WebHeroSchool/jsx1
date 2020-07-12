import React from 'react';
import styles from '../App/App.module.css';

const Item = ({ value }) => (<span className = {styles.item}>{value}</span>);

export default Item;
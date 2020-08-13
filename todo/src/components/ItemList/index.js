import PropTypes from 'prop-types';
import React from 'react';
import Item from '../Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete, filterItems, name }) => (<ul>
  {filterItems.map(item => (<li key = {item.id} className = {styles.list}>
    <Item
      value = {item.value}
      isDone = {item.isDone}
      id = {item.id}
      onClickDone = {onClickDone}
      onClickDelete = {onClickDelete}
    />
  </li>))}
</ul>);

ItemList.defaultProps = {
  items: [],
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickDone: PropTypes.func.isRequired,
};

export default ItemList;
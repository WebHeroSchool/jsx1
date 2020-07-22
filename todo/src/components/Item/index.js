import PropTypes from 'prop-types';
import React from 'react';
import styles from '../App/App.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

class Item extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => console.log('mounting'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { value, isDone, id, onClickDone, onClickDelete } = this.props;

    return (<span className = {
      classnames({
        [styles.item]: true,
        [styles.done]: isDone,
      })}>
      <div className = {styles.list}>
        <div>
          <Checkbox
            className = {styles.checkbox}
            color = 'primary'
            checked = {isDone}
            onClick = {() => onClickDone(id)}
          />
          {value}
        </div>
        <div className = {styles.icons}>
          <DeleteForeverOutlinedIcon
            className = {styles.clear}
            onClick = {() => onClickDelete(id)}
          />
        </div>
      </div>
    </span>);
  }
}

Item.defaultProps = {
  isDone: false,
};

Item.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickDone: PropTypes.func.isRequired,
};

export default Item;
import PropTypes from 'prop-types';
import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    inputHelperText: '',
    isEmpty: false,
    error: false,
    label: 'What needs to be done?'
  };

  onChangeInput = event => {
    if(this.state.isEmpty === true) {
      this.setState({ isEmpty: false });
    }
    else {
      this.setState({
        inputValue: event.target.value,
        inputHelperText: '',
        error: false,
      });
    }
  };

  onButtonClick = items => {
    if(this.state.inputValue !== '') {
      if(this.props.items.find(item => this.state.inputValue === item.value)) {
        this.setState(state => ({
          inputHelperText: 'Это заметка уже есть!',
          error: true,
        }));  
      }
      else if(this.state.inputValue.length > 50) {
       this.setState(state => ({
          inputHelperText: 'Превышена длина заметки!',
          error: true,
        })); 
      }
      else {
        this.setState({
            inputValue: ''
        });
        this.props.onClickAdd(this.state.inputValue);
      }
    }
    else {
      this.setState(state => ({
        inputHelperText: 'Пустое поле!',
        isEmpty: true,
        error: true,
      }));
    }
  };

  render() {
    return (<div className = {styles.input}>
      <TextField
        className = {styles.comp}
        error = {this.state.error}
        id="filled-basic"
        label={this.state.label}
        variant="filled"
        size="small"
        value={this.state.inputValue}
        onChange={this.onChangeInput}
        helperText={this.state.inputHelperText}
      />
      <span className = {styles.addIcon}>
        <AddCircleOutlineOutlinedIcon
          className = {styles.addButton}
          color="primary"
          fontSize = 'large'
          onClick = {this.onButtonClick}
        />
      </span>
    </div>);
  }
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};

export default InputItem;
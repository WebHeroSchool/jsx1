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
        inputValue: event.target.value.toUpperCase(),
        inputHelperText: '',
        error: false,
      });
    }
  };

  onButtonClick = () => {
    if(this.state.inputValue !== '') {
      this.setState({
        inputValue: ''
      });
      this.props.onClickAdd(this.state.inputValue)
    }
    else {
      this.setState(state => ({
        inputHelperText: 'Incorrect entry',
        isEmpty: true,
        error: true,
        label: 'Enter the to-do',
      }));
    }
  };

  render() {
    return (<div className = {styles.input}>
      <TextField
        error = {this.state.error}
        className = {styles.comp}
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


export default InputItem;
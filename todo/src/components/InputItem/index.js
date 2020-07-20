import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    inputHelperText: '',
    isEmpty: false,
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
      }));
    }
  }

  render() {
    const { onClickAdd } = this.props;

    if(this.state.isEmpty === true) {
      return (<div className = {styles.input}>
        <TextField
          error
          className = {styles.comp}
          id="filled-basic"
          label="Enter the to-do"
          variant="filled"
          size="small"
          value={this.state.inputValue}
          onChange = {event => this.setState({ isEmpty: false })}
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

    else {
      return (<div className = {styles.input}>
        <TextField
          className = {styles.comp}
          id="filled-basic"
          label="What needs to be done?"
          variant="filled"
          size="small"
          value={this.state.inputValue}
          onChange = {event => this.setState({
            inputValue: event.target.value.toUpperCase(),
            inputHelperText: '',
          })}
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
}

export default InputItem;
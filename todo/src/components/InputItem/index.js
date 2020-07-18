import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    this.props.onClickAdd(this.state.inputValue)
  }

  render() {
    const { onClickAdd } = this.props;

    return (<div className = {styles.input}>
      <TextField
        className = {styles.comp}
        id="filled-basic"
        label="What needs to be done?"
        variant="filled"
        size="small"
        value={this.state.inputValue}
        onChange = {event => this.setState({ inputValue: event.target.value })}
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
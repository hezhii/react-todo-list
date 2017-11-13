import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <input type='text' ref='input'/>
        <button onClick={e => this.handleClick()}>
          Add
        </button>
      </div>
    )
  }

  handleClick() {
    const dom = this.refs.input;
    const text = dom.value.trim();
    this.props.onAddClick(text);
    dom.value = '';
  }
}

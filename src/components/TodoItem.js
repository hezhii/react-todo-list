import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }

  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.title}
      </li>
    )
  }
}

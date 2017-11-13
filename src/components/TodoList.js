import React, {Component} from 'react'
import PropTypes from 'prop-types';

import TodoItem from './TodoItem'

export default class TodoList extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todoItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
  }

  render() {
    return (
      <ul>
        {this.props.todoItems.map((todoItem, index) =>
          <TodoItem {...todoItem}
                    key={index}
                    onClick={() => this.props.onTodoClick(index)}/>
        )}
      </ul>
    )
  }
}

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../redux/actions'

import AddTodo from '../components/AddTodoItem'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class List extends Component {
  static propTypes = {
    visibleTodoItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE'
    ]).isRequired
  }

  render() {
    const {visibleTodoItems, visibilityFilter} = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            this.props.addTodo(text)
          }/>
        <TodoList
          todoItems={visibleTodoItems}
          onTodoClick={index =>
            this.props.completeTodo(index)
          }/>
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            this.props.setVisibilityFilter(nextFilter)
          }/>
      </div>
    );
  }
}


function selectTodoItems(todoItems, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todoItems;
    case VisibilityFilters.SHOW_COMPLETED:
      return todoItems.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todoItems.filter(todo => !todo.completed);
  }
}

const mapStateToProps = (state) => {
  return {
    visibleTodoItems: selectTodoItems(state.todoItems, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    },
    completeTodo: (index) => {
      dispatch(completeTodo(index))
    },
    setVisibilityFilter: (nextFilter) => {
      dispatch(setVisibilityFilter(nextFilter))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

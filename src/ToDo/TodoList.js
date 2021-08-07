import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
const styles = {
    ul: {
        listStyle: 'none',
    }
}
export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map(
                (todo, index) => {
                    return <TodoItem todo={todo} key={todo.id} id={todo.id} onChange={props.onToggle}  onSubmit={props.onSubmit} index={index}/>
                }
            )}
        </ul>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,
}

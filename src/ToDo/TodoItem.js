import React from 'react';
import PropTypes from 'prop-types';
const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        marginBottom: '.5rem'

    },
}


export default function TodoItem({ todo, onChange,onSubmit,index }) {
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (

        <li style={styles.li}>
            <span className={classes}>
                <input type="checkbox" onChange={() => onChange(todo.id)} />
                <strong>{index +1}</strong>
                {todo.title}
            </span>
            <input type="checkbox" onChange={() => onSubmit(todo.id)} />
        </li>
    )
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

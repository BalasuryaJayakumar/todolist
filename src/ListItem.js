import React from 'react'
import Task from './Task'

const ListItem = ({ lists, handleDelete }) => {
  return (
    <ul>
        {lists.map(list => (
        <Task key={list.id} list={list} handleDelete={handleDelete} />
    ))}
    </ul>
  )
}

export default ListItem
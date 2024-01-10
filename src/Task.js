import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ list, handleDelete }) => {
  return (
    <li>
      {list.task}
      <FaTrashAlt
        role='button'
        className='deleteBtn'
        onClick={() => handleDelete(list.id)}
      />
    </li>
  )
}

export default Task
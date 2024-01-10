/* import React, { useContext } from 'react'
import DataContext from './context/dataContext' */

const AddList = ({ task, setTask, handleSubmit }) => {

 /*  const { task, setTask, handleSubmit } = useContext(DataContext) */

  return (
    <section className='formSection'>
      <form className='inputForm' onSubmit={handleSubmit}>
        <label htmlFor="addTask">Enter Task:</label>
        <input 
          type="text" 
          id='addTask'
          name='addTask'
          required
          placeholder='Enter Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type='submit'
          className='submitBtn'
        >add</button>
      </form>
    </section>
  )
}

export default AddList
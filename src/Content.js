/* import React, { useContext } from 'react' */
import ListItem from './ListItem'
/* import DataContext from './context/dataContext' */

const Content = ({ lists, setLists, handleDelete }) => {

/*   const { lists, handleDelete } = useContext(DataContext) */

  return (
    <main className="main">
        { lists.length 
        ? <ListItem lists={lists} handleDelete={handleDelete} /> 
        : <p style={{marginTop: '2rem'}}>Your ToDo List is Empty</p>
        }
    </main>
  )
}

export default Content
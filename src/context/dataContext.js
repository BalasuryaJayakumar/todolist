import { createContext, useEffect, useState } from "react";
import api from "../api/lists";


const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [ lists, setLists ] = useState('')
    
    const [ task, setTask ] = useState('')
  
    useEffect(() => {
      const fetchPosts = async () => {
        try{
          const response = await api.get('/lists')
          setLists(response.data)
        } catch(err) {
          if(err.response) {
            console.log(err.response.status);
            console.log(err.response.headers);
            console.log(err.response.data);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      }
      fetchPosts()
    }, [])
    
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const id = lists ? lists[lists.length - 1].id + 1 : 1;
      const newList = { id, task }
      try{
        const response = await api.post('/lists', newList)
        const allLists = [...lists, response.data]
        setLists(allLists)
        setTask('')
      } catch(err) {
        console.log(`Error: ${err.message}`);
      }
    }
  
    const handleDelete = async (id) => {
      try {
        await api.delete(`/lists/${id}`)
        const allList = lists.filter(list => list.id !== id)
        setLists(allList)
      } catch(err) {
        console.log(`Error:${err.message}`);
      }
    }

    return (
        <DataContext.Provider value={{
            lists, setLists, handleDelete,
            task, setTask, handleSubmit
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
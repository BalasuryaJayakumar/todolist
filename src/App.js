import { useEffect, useState } from "react";
import AddList from "./AddList";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import api from "./api/lists";


function App() {

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
  console.log(lists);

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
    <div className="App">
      <Header title={'ToDo Lists'} />
      <AddList task={task} setTask={setTask} handleSubmit={handleSubmit}/>
      <Content lists={lists} setLists={setLists} handleDelete={handleDelete} />
      <Footer length={lists.length}/>
    </div>
  );
}

export default App;

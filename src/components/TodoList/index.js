import { useEffect, useState } from 'react';

import logo from "../../assets/logo.svg";
import "./TodoList.css";
import TodoItem from "../TodoItem"
import { getTodos, deleteTodo } from "../../services/todo.service"

export default function TodoList()  {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [err, setErr] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setItems(await getTodos())
        setErr("")
      } catch(err){
        setErr("Something went wrong fetching todos")
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  const removeTodo = async (name) => {
    try {
      await deleteTodo(name);

      setItems(items.filter((item) => item.name !== name))
    } catch(err){

      setErr(`Something went wrong deleting todo "${name}"`);
    }
  }
  
  if (isLoading) {
    return ( 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        Loading...
      </header>
    )
  }

  if (err){
    return (
      <header className="App-header">
        <h3 className='error'>{err}</h3>
      </header>
    );
  }

  return (
    <>
      <button className='add'>Add todo</button>

      <ul>
        {items.map((item) => (
          <TodoItem key={item.name} item={item} onDelete={removeTodo} />
        ))}
      </ul>
    </>
  );
}

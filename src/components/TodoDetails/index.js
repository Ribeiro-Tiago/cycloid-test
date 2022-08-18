import dayjs from "dayjs";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import "./TodoDetails.css"
import { getTodo } from "../../services/todo.service"


export default function TodoDetail() {
  const splat = useParams();
  const [isLoading, setLoading] = useState(true)
  const [err, setError] = useState("")
  const [todo, setTodo] = useState(true)

  useEffect(() => {
    (async function() {
      try {
        setTodo(await getTodo(splat.name));
        setError("");
      } catch (err) {
        setError(err);
      }

      setLoading(false)
    })()
    
  }, [splat])


  const expirationDate = dayjs(todo.expireDate);
  const className = expirationDate.isBefore(dayjs()) ? "expired" : "";

  const formatDate = (date) => date.format("DD-MM-YYYY HH:mm:ss");


  if (isLoading){
    return <h3>Getting todo...</h3>
  }

  if (err){
    return <h3 className="error">Todo doesn't exist</h3>;
  }

  return (
    <div className='details'>
      <h2>
        <Link to="/">&lt;&nbsp;</Link> Detalhes
      </h2>

      <div className="group">
        <label>Name</label>
        <span>{todo.name}</span>
      </div>

      <div className="group">
        <label>Description</label>
        <span>{todo.description}</span>
      </div>

      <div className={"group " + className}>
        <label>Expiration date</label>
        <span>{formatDate(expirationDate)}</span>
      </div>

      <div className="group">
        <label>Created date</label>
        <span>{formatDate(dayjs(todo.creationDate))}</span>
      </div>
    </div>
  );
}

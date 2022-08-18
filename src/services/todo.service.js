import axios from "./axios"

// hardcoded for this test, normally would be dynamic and from some other soruce
const id = "91478d38-1fe6-47d6-913e-6466e2b30c86";


export const getTodos = () => axios.get(id)

export const getTodo = (name) => axios.get(`object/${id}/${name}`);

export const deleteTodo = (name) => axios.delete(`object/${id}/${name}`);

export const addTodo = (payload) => axios.post(payload);
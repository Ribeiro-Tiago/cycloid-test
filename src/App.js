import { Route, Routes } from 'react-router-dom';
import TodoDetail from './components/TodoDetails';
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path=":name" element={<TodoDetail />} />
      </Routes>
    </div>
  );
};
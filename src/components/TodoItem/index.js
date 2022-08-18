import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import "./TodoItem.css"

export default function TodoList({ item, onDelete }) {
  const expirationDate = dayjs(item.expireDate);
  const className = expirationDate.isBefore(dayjs()) ? "expired" : "";

  const onClick = () => onDelete(item.name)

  return (
    <Link to={item.name}>
      <li className={className}>
        <h3>
          &gt; {item.name}&nbsp;
          <span>{expirationDate.format("DD-MM-YYYY HH:mm:ss")}</span>
        </h3>

        <button onClick={onClick}>Delete</button>
      </li>
    </Link>
  );
}

import { FC } from "react";
import { TodoType } from "../../types/todo";

interface IProps {
  todoList: Array<TodoType>;
}

export const TodoList: FC<IProps> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        {/* todoListの後?をつけることで、nullがきても大丈夫 */}
        {props.todoList?.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <input type="checkbox" checked={todo.completed} readOnly />{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

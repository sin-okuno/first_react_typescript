import { TodoType } from "../../types/todo";

export const TodoList = (props: Array<TodoType>) => {
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

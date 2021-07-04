interface Iprops {
  todoList: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>;
}

export const TodoList = (props: Iprops) => {
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
                <input type="checkbox" checked={todo.completed} />{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

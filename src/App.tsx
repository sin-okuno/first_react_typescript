import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { TodoList } from "./components/organisms/todoList";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [fetchDatas, setFetchDatas] = useState<Array<TodoType>>();
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setFetchDatas(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      <TodoList todoList={fetchDatas} />
    </div>
  );
}

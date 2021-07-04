import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { TodoList } from "./components/organisms/todoList";

export default function App() {
  const [fetchDatas, setFetchDatas] = useState<
    Array<{ userId: number; id: number; title: string; completed: boolean }>
  >();
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
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

import axios from "axios";
import { useState } from "react";
import "./styles.css";

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
          {fetchDatas?.map((fetchData) => {
            return (
              <tr key={fetchData.id}>
                <td>{fetchData.id}</td>
                <td>{fetchData.userId}</td>
                <td>{fetchData.title}</td>
                <td>{fetchData.completed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";

export const Practice1 = () => {
  const [total, setTotal] = useState<number>(0);
  const task: number = 3.3;
  const getTotal = (num: number): number => {
    setTotal(num * task);
    return total;
  };

  const onClickPractice = () => getTotal(2000);
  return (
    <div>
      <p>練習問題１</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
      <p>`合計金額${total}`</p>
    </div>
  );
};

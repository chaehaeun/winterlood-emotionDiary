import React, { useState } from "react";
import MyHeader from "./../components/MyHeader";
import MyBtn from "./../components/MyBtn";

export default function Home() {
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyBtn text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyBtn text={">"} onClick={increaseMonth} />}
      />
    </div>
  );
}

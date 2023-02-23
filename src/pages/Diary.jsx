import React from "react";
import { useParams } from "react-router-dom";

export default function Diary() {
  const { id } = useParams();

  return (
    <div>
      <h1>다이어리</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
}

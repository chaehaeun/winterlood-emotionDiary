import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";

// COMPONENTS
import MyBtn from "./components/MyBtn";
import MyHeader from "./components/MyHeader";

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headTxt={`App`}
          leftChild={<MyBtn text={"왼쪽 버튼"} onClick={() => {}} />}
          rightChild={<MyBtn text={"오른쪽 버튼"} onClick={() => {}} />}
        />
        <h2>App.jsx</h2>

        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} alt="" /> */}
        {/* 퍼블릭폴더 내의 파일을 바로 갖다 쓸 수 있는 명령어 */}

        <MyBtn
          text={"버튼"}
          onClick={() => {
            alert("우와");
          }}
          type={"positive"}
        />
        <MyBtn
          text={"버튼"}
          onClick={() => {
            alert("우와");
          }}
          type={"negative"}
        />
        <MyBtn
          text={"버튼"}
          onClick={() => {
            alert("우와");
          }}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

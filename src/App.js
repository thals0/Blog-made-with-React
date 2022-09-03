/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let post = "강남 우동 맛집";
  // state
  let [title, b] = useState([
    "여자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h4>BLOG</h4>
      </div>
      {/* <h4>{post}</h4> */}
      <button
        onClick={() => {
          let copy = [...title];
          b(copy.sort());
          // console.log(title);
          // console.log(copy);
        }}
      >
        글자순 정렬
      </button>
      <div className="list">
        <h4 onClick={() => {}}>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>9월 3일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>9월 3일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>9월 3일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

// 상세페이지
function Modal() {
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Details</p>
    </div>
  );
}

export default App;

/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let post = "강남 우동 맛집";
  // state
  let [title, setTitle] = useState([
    "여자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="nav">
        <h4>BLOG</h4>
      </div>
      {/* <h4>{post}</h4> */}
      <br />
      <button
        onClick={() => {
          let copy = [...title];
          setTitle(copy.sort());
          // console.log(title);
          // console.log(copy);
        }}
      >
        글자순 정렬
      </button>

      {/* <div className="list">
        <h4
          onClick={() => {
            if (modal == false) {
              setModal(true);
            } else {
              setModal(false);
            }
          }}
        >
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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[1]}
        </h4>
        <p>9월 3일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>9월 3일 발행</p>
      </div> */}

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {title[i]}
              <span
                style={{ margin: "0px 8px 0px 8px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>9월 3일 발행</p>
            <button
              style={{ marginBottom: "8px" }}
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <br />
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // 뭐야 이렇게했는데 왜 실행되지?
          // title = title.push(input);
          // setInput(title);
          // like = like.push(0);
          let copy = [...title];
          copy.push(input);
          setTitle(copy);
        }}
      >
        완료
      </button>

      {modal == true ? (
        <Modal modalTitle={modalTitle} title={title} setTitle={setTitle} />
      ) : null}
    </div>
  );
}

// 상세페이지
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>Date</p>
      <p>Details</p>
      <button>글수정</button>
    </div>
  );
}

export default App;

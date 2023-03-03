/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['글 제목 1', '글 제목2', '글 제목3']);
  let [좋아요, 증가] = useState(0);
  let posts = '블로그글';

  function 제목바꾸기() {
    var newArr = [...글제목]; // 딥카피를 통해 값을 똑같이 복사해서 가져와라
    newArr[0] = '글제목 변경';
    글제목변경(newArr);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{fontSize: '30px'}}>개발 Blog</div>
      </div>
      <button onClick={()=>{제목바꾸기()}}>변경</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={() => {증가(좋아요+1)}}>👍</span> {좋아요} </h3>
        <p>3월 2일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>3월 2일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>3월 2일 발행</p>
        <hr/>
      </div>

      <Modal/>

    </div>
  );
}
//컴포넌트
function Modal(){
  return (
    <div>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;

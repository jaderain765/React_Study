import React, { useState } from "react";

const IterationSample = () => {
  // const names = ['눈사람', '얼음', '눈', '바람'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // return (
  //     <ul>{nameList}</ul>
  // );

  //[응용]
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새항목을 추가할 때 사용하는 Id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    //concat: 배열 붙이기
    const nextNames = names.concat(
      { id: nextId, text: inputText }
    );
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 없데이트 한다.
    setInputText(''); // inputText을 비운다.
  }

  const onRemove = id => {
    // filter: 조건에 통과하는 항목만 남기기
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;

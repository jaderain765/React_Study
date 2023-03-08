import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [ form, setForm ] = useState({ name: '', username: ''});
  const [ data, setData ] = useState({ array:[], uselessValue: null});

  // input을 수정하기 위한 함수
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(
      produce(draft => { draft[name] = value })
    );
  }, []);

  //form 등록을 위한 함수
  const onSubmit = useCallback(e => {
    e.preventDefault();
    const info = { id: nextId.current, name: form.name, username: form.username };

    //array에 새 항목 등록
    // setData({...data, array: data.array.concat(info)}); //useState값을 변경하는 기존방법
    setData(produce(draft => {draft.array.push(info)})); //immer를 이용한 값변경 방법

    // form 초기화
    setForm({ name: '', username: ''});
    nextId.current += 1;
  },[form.name, form.username]);

  // 항목을 삭제하는 함수
  const onRemove = useCallback(id => {
    // setData({...data, array: data.array.filter(info => info.id !== id)});
    // useState 값을 immer를 이용해서 변경
    setData(produce(draft => { draft.array.splice(draft.array.findIndex(info => info.id === id), 1)}));
  }, []);

  /* 
  onSubmit과 onRemove의 구문을 immer를 이용해서 변경했다.
  immer를 사용하면 push, split 같은 자바스크립트 문법을 사용할 수 있습니다.
  onRemove는 filter하는 내장 함수를 지원하기에 immer를 사용하는것이 꼭 간결해지진 않습니다.
  */

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
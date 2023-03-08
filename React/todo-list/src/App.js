// /* eslint-disable */
// import React, { useState, useRef, useCallback} from 'react';
// import TodoTemplate from './Component/TodoTemplate';
// import TodoInsert from './Component/TodoInsert';
// import TodoList from './Component/TodoList';

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: '리액트의 기초 알아보기', checked: true,},
//     { id: 2, text: '컴포넌트 스타일링해 보기', checked: true,},
//     { id: 3, text: '일정관리 앱 만들어 보기', checked: false,},
//   ]);
//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     text => {
//       const todo = { id: nextId.current, text, checked: false,};
//       setTodos(todos.concat(todo));
//       nextId.current += 1;
//     }, [todos],
//   );

//   const onRemove = useCallback(
//     id => {
//       setTodos(todos.filter(todo => todo.id !== id));
//     },
//     [todos],
//   );

//   const onToggle = useCallback(
//     id => {
//       setTodos(
//         todos.map(todo => 
//           todo.id === id ? {...todo, checked: !todo.checked} : todo,
//         ),
//       );
//     },
//     [todos],
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert}/>
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };

// export default App;

import React, { useReducer, useRef, useCallback} from 'react';
import TodoTemplate from './Component/TodoTemplate';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({ id: i, text: `할 일 ${i}`, checked: false,});
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,);
    default:
      return todos;
  }
}

const App = () => {
  // const [ todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);

  const onInsert = useCallback( text => {
    const todo = { id: nextId.current, text, checked: false};
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback( id => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback( id => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;

/*
[Hook] 
useState: 컴포넌트 내에서 가변적인 상태값을 가질 수 있게 합니다.
useEffect: 리액트 컴포넌트가 렌더링될 때마다 특정작업을 수행하도록 합니다.
useReducer: useState보다 더욱 다양한 상태를 다른값으로 업데이트 합니다.
useMemo: 컴포넌트 내부의 연산을 최적화 합니다. 특정 값이 변경될 때만 랜더링 합니다.
useCallback: useMemo와 비슷하게 특정값이 변경될 때만, 랜더링이 일어나게 해서 리소스를 아낍니다.
useRef: 컴포넌트에서 ref를 사용 할 수 있게 해줍니다.
  ref란, state(상태값)와 다르게 랜더링에 관계없이 값을 유지해 줍니다.

*/
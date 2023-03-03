import React, { useState, useCallback } from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';
import '../css/TodoInsert.scss';


const TodoInsert = ({onInsert}) => {
  const[ value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    }, [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input 
        value={value}
        onChange={onChange}
        placeholder="일정을 입력해주세요."/>
      <button type="submit">
        <BsPlusCircleFill/>
      </button>
    </form>
  );
};

export default TodoInsert;
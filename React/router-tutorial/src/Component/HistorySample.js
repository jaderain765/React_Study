import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrompt } from '../static/Blocker';

function HistorySample() {
  const navigate = useNavigate();

  function handleGoBack(){
    navigate(-1);
  }

  function handleGoHome() {
    navigate('/');
  }

  // usePrompt('현제 페이지를 벗어나시겠습니까?', true);
  // useEffect(() => {
  // }, []);
  
  // componentDidMount() {
  // };

  // function conponentWillUnmount() {
  //   if(this.unblock){
  //     this.unblock();
  //   }
  // }

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
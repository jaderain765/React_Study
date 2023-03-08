import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true'; //쿼리 파싱값이기에 문자열임

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
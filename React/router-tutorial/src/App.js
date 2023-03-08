import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import Profiles from './Component/Profiles';
import HistorySample from './Component/HistorySample';

const App = () => {
  const location = useLocation();
  console.log(location);
  

  return (
    <div>
      <h1>라우팅 테스트</h1>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles">프로필</Link></li>
        <li><Link to='/history'>history 예제</Link></li>
        <li><Link to='/nowhere'>nowhere 예제</Link></li>
      </ul>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about/*" element={<About/>} />
        <Route path="/profiles/*" element={<Profiles/>} />
        <Route path='/history' element={<HistorySample/>} />
        <Route path='/*' element={
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>페이지명: {location.pathname}</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
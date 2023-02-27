// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//       <p>개싱기</p>
//     </div>
//   )
// }

// export default App;

// import React, { Fragment } from 'react';

// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//       <p>개싱기</p>
//     </Fragment>
//   )
// }

// export default App;

// import React from 'react';
// import './App.css';

// function App() {
//   //변수 선언부
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: 16
//   };

//   console.log(1);
//   console.log(2);
//   console.log(3);
//   return (
//     <>
//       {console.log("4")}
//       <h1>{name} 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//       <p>개싱기</p>
//       {/* 조건부 랜더링 */}
//       <div>
//         <h1>이딴게 리액트?</h1>
//         { name ==='react' ? (<h1>이거 리액트 맞음</h1>):(<h1>이거 리액트 아님</h1>)}
//         { name ==='react' ? (<h1>이거 리액트 맞음</h1>):null}
//         { name ==='react' && (<h1>이거 리액트 맞음</h1>)}
//         { undefined || "It's undefined" }
//       </div>
//       <div style = { style }>
//         스타일 테스트
//       </div>
//       <div className='react'>css 테스트</div>
//     </>
//   )
// }

// export default App;

import React from 'react';
import './App.css';

function App() {
  const name = '리액트';

  return (
    <>
      {/* 주석은 이렇게 작성 합니다. */}
      <div className="react">{name}</div>
      //하지만 이런 주석이나 /* 이런 주석은 그대로 나타나게 됩니다. */ asd
      <input />
    </>
  );
}

export default App;

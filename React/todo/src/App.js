// import React from 'react';
// import MyComponent from './component/MyComponent';

// const App = () => {
//   return (
//     <MyComponent name='리액트이름' favoriteNumber={3}>
//       리액트칠드런
//     </MyComponent>
//   )
// };

// export default App;


// import React from 'react';
// import Counter from './component/Counter';

// const App = () => {
//   return <Counter/>;
// };

// export default App;


// import React from "react";
// import Say from "./component/Say";

// const App = () => {
//   return <Say />;
// };

// export default App;

// import React from 'react';
// import EventPractice from './component/EventPractice';

// const App = () => {
//   return <EventPractice/>;
// };

// export default App;


// import React from 'react';
// import VaildationSample from './component/ValidationSample';

// const App = () => {
//   return <VaildationSample/>
// }

// export default App;


// import React from 'react';
// import ResSample from './component/RefSample';

// const App = () => {
  //   return <ResSample/>
  // }
  
  // export default App;
  
// import React from 'react';
import React, {Component} from 'react';
import ScrollBox from './component/ScrollBox';

// const App = () => {
//   return (
//     <div>
//       <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//       <button onClick={() => this.scrollBox.scrollToBottom()} >
//         맨 밑으로
//       </button>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
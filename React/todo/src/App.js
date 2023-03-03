// import React from 'react';
import React, {Component} from 'react';

// import ScrollBox from './component/ScrollBox';
// import IterationSample from './component/IterationSample';
import LifeCycleSample from './component/LifeCycleSample';
import ErrorBoundary from './component/ErrorBoundary';

function getRandomColor() {
  let colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16); //16진수로 변환
  console.log("colorCode: "+colorCode);
  return colorCode;
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        {/* <h1>ScrollBox</h1>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>

        <h1>IterationSample</h1>
        <IterationSample/> */}

        <h1>LifeCycleSample</h1>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
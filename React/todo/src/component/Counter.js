import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) { //컴포넌트 생성자 메서드
        super(props);
        // state의 초깃값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>숫자 변화: {number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => { //onClick을 통해 버튼이 클릭되었을 떄 호출할 함수를 지정합니다.
                        this.setState({number: number + 1},() => {console.log('첫번째 setState 실행'); console.log(this.state)}); //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                        this.setState({number: this.state.number + 1}, () => {console.log('두번째 setState 실행'); console.log(this.state)}); // set이 바로 적용되는것이 아니기에 값이 변하진 않는다.
                        this.setState((prevstate, props) => ({ // prevState:기존상태, props:현재 지니고 있는 상태
                            number: prevstate.number + 1
                        }), () => {console.log('세번째 setState 실행'); console.log(this.state)});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
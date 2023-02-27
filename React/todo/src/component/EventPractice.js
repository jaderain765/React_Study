// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value //[key]: value형태로 저장합니다.
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if(e.key === 'Enter'){
//         this.handleClick();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="메시지를 입력하세요."
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyDown={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;


import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setform] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;

    const onChange = e => {
        const nextForm = {
            ...form,// 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 쓰기
        };
        setform(nextForm);
    }

    const onClick = () => {
        alert(username + ": " + message);
        setform({
            username: '',
            message: ''
        });
    };
    const onKeyDown = e => {
        let key = e.key || e.keyCode;
        console.log("key:"+key);

        if((key === 'Enter' && !e.shiftKey) || (key === 13 && key !== 16)){
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="메시지를 입력해주세요."
                value={message}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
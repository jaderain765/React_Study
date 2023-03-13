# Redux 정리

```shell
프로젝트 파일 생성
npx create-react-app redux-tutorial

npm install redux
npm install react-redux
```

```Java
System.out.print("안녕");
```

## 1. Hooks를 이용하여 상태 조회하기

리액트에선 리덕스에서 사용할 수 있는 "useSelector"과 "useDispatch"가 있다.

### useSelector로 상태 조회하기

```jsx
const 결과 = useSelector(상태 선택 함수);
```

### useDispatch로 액션 디스패치하기

```jsx
const dispatch = useDispatch();
dispatch({ type: 'SAMPLE_ACTION' });
```

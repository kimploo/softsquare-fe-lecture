import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // JSX 문법으로 적은 모든 것을 #root 엘리먼트에 전부 넣어주는 것이다.
  // React Component는 아래와 같이 호출합니다.
  <App></App>,
  // <App />,
  // {App()} -> 표준 X
)

// add()
// <App />
// <App></App>
import { Component, useEffect, useState } from 'react'
import s from './page.module.css'

/**
 * React Component
 * 
 * 대문자로 시작하는 함수, 클래스를 리액트가 호출하면 React Component다.
 * React Component는 클래스와 함수로 작성이 가능하다.
 * 
 * React Class Component는 16.8 버전 이전 상태가 있는 컴포넌트를 작성하기 위해 사용했다.
 * 16.8 버전 이후에 React Function Component에 useState()와 같은 상태 훅을 사용할 수 있게 되면서 잘 사용하지 않는다.
 * (새로 나온 React 공식 문서에서도 함수 컴포넌트 권장)
 * 
 * 다만, React Lifecycle과 레거시 코드를 좀 더 잘 이해하기 위해서 짧게 소개한다.
 * 
 */

class ClassComponent extends Component {

  /**
   * JavaScript 클래스와 마찬가지로
   * React Class Component도 constructor의 본문을 가장 먼저 실행한다.
   * constructor에는 state, props, even handler등 시작 전에 정의해야 할 코드를 작성한다.
   * (그 외 목적의 코드는 작성하지 않는게 Best)
   * 
   */
  constructor(props) {
    super(props)
    // this.eventHandler = this.eventHandler.bind(this)
  }

  /**
   * componentDidMount는 컴포넌트가 화면에 보여지고 나서 (mount) 호출되는 메서드다.
   * 주로 네트워크 요청을 받아오고 DOM 조작을 할 때 사용한다. (렌더링이 네트워크 요청보다 더 오래 걸리는 경우)
   * (React가 렌더링을 다 마치지 않았는데 fetch를 한다면? 의도치 않은 문제가 생길 가능성이 높다.)
   */
  componentDidMount() {
    console.log('componentDidMount')
  }
  
  /**
   * componentDidUpdate는 컴포넌트가 state나 props가 변경되어 다시 렌더링될 때 (re-render) 호출되는 메서드다.
   * 상태, props 변경 시 어떤 작업을 해야 하는 경우에 사용한다.
   * 
   * prevProp, prevState 
   * 
   */
  componentDidUpdate(prevProp, prevState) {
    if (this.props.count % 2 === 0) {
      console.log('when this.props.count is even')
    }
    console.log('componentDidUpdate')
  }
  
  /**
   * componentWillUnmount는 컴포넌트가 화면에서 사라질 때 (unmount) 호출되는 메서드다.
   * 네트워크 요청을 취소하거나 구독(ex. socket)을 취소할 때 사용한다.
   */
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  
  render() {
    return <div>
      <span>{this.props.count}</span>
      Class Component 
    </div>
  }
}

function FunctionComponent({ count }) {
  useEffect(() => {
    console.log('on mount')
    return () => console.log('on unmount');
  }, [])
  
  useEffect(() => {
    console.log('on mount and update')
  }, [count]) 
  
  return <div>
    <span>{count}</span>
    Function Component
  </div>
}

export default function LearnClassFunction() {
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0)

  return <div className={s.appContainer}>
    <button onClick={() =>setIsOn(!isOn)}>
      {isOn ? 'on' : 'off'}
    </button>
    <button onClick={() => setCount(count + 1)}>up</button>
    {isOn ? <>
      {/* <ClassComponent count={count}></ClassComponent> */}
      <FunctionComponent count={count}></FunctionComponent>
    </> : null}

  </div>
}

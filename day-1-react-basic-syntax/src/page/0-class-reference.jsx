import { Component, useEffect, useState } from 'react'
import s from './page.module.css'

class ClassComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  
  componentDidUpdate() {
    if (this.props.count % 2 === 0) {
      console.log('when this.props.count is even')
    }
    console.log('componentDidUpdate')
  }
  
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
    return () => console.log('on unmount')
  }, [])
  
  useEffect(() => {
    console.log('on mount and update')
  }) 
  
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
      <ClassComponent count={count}></ClassComponent>
    <FunctionComponent count={count}></FunctionComponent>
    </> : null}

  </div>
}

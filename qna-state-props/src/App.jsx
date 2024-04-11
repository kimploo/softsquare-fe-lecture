/* eslint-disable react/prop-types */
import { useState } from 'react'

const arr = [
  {
    isRed: true,
  },
  {
    isRed: false,
  },
    {
    isRed: true,
  },
    {
    isRed: false,
  },
]

function RedBlue({ idx, isRed, children, handleChangeColor }) {
  console.log('render redblue')
  return isRed ?
  <div 
  onClick={() => handleChangeColor(idx)} 
  style={{
    backgroundColor: 'red',
    width: 200,
    height: 200,
  }}>{children}</div>
  : <div 
  onClick={() => handleChangeColor(idx)}  
  style={{
    backgroundColor: 'blue',
    width: 200,   
    height: 200
  }}>{children}</div>
}

function App() {


  return (
  <main>
    {
      colors.map((e, i) => {
        return <RedBlue key={i} idx={i} isRed={e.isRed} handleChangeColor={handleChangeColor}>{e.content}</RedBlue>
      })
      }
  </main>
  )
}

function Wrapper() {
  const [colors, setColor] = useState(arr)
  console.log('render App')
  
  const handleChangeColor = (idx) => {
    const newColor = {
      ...colors[idx],
      isRed: !colors[idx].isRed
    }
    setColor([...colors.slice(0, idx), newColor, ...colors.slice(idx + 1)]) 
  }
  
  return <App
  handleChangeColor={handleChangeColor}
  ></App>
}

export default Wrapper

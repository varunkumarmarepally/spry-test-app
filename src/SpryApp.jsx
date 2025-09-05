import { useState } from 'react'
import './App.css'

function SpryApp({data}) {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      {data ? `Hello ${data.name}` : 'Hello'}
      <br/>  
      {count}
      <br/>
      <button onClick={updateCount}>Add</button>
      <br/>
      <img src="https://picsum.photos/id/234/200/300" alt="Image Alt" loading="lazy" />
    </>
  )
}

export default SpryApp

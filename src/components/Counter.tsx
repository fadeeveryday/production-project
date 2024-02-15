import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState (0)

  const Increment = () => {
    setCount(count + 1)
  }

  const Decrement = () => {
    setCount(count - 1)
  }
  return (
    <div >
      <h1>{count}</h1>
      <button className={classes.button} onClick={Increment}>Increment</button>
      <button className={classes.button} onClick={Decrement}>Decrement</button>
    </div>
  )
}
import { useState, useCallback } from "react"

export const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increase = useCallback(() => setCounter(prev => prev + 1), [])
  const decrease = useCallback(() => setCounter(prev => prev - 1), [])

  return {
    counter,
    increase,
    decrease
  }
}
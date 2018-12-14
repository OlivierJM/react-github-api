import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value)
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebounced(value)
      }, delay)
      return () => clearTimeout(handler)
    },
    [value, delay]
  )
  return debounced
}
export { useDebounce }

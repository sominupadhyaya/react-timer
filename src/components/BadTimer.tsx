import { useEffect, useState } from "react"
import '../styles/Timer.css'
const BadTimer = () => {
  const [time, setTime] = useState<number>(0)

  useEffect(() =>{
    setInterval(() =>{
        setTime(t => t + 0.1)
      },100)
    } , [])
  return (
    <>
    <h1>Bad Timer : </h1>
    <h2>{time.toFixed()}</h2>
    </>
  )
}
export default BadTimer
import { useEffect, useState } from "react"

const BadTimer = () => {
  const [time, setTime] = useState<number>(0)

  useEffect(() =>{
    setInterval(() =>{
        setTime(t => t + 0.1)
      },100)
    } , [])
  return (
    <>
    <div>BadTimer</div>
    <h1>Timer</h1>
    <div>{time.toFixed()}</div>
    </>
  )
}
export default BadTimer
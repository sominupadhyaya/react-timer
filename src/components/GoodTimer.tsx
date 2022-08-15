import { useEffect , useState } from "react"

const GoodTimer = () => {
    const [time, setTime] = useState<number>(0)

    useEffect(() =>{
    const interval = setInterval(() =>{
            setTime(t => t+0.1)
        } , 100)
    return () => clearInterval(interval)
    } , [])
    
    
    return (
    <>
    <div>GoodTimer</div>
    <h1>Good Timer</h1>
    <div>{time.toFixed()}</div>
    </>
  )
}

export default GoodTimer
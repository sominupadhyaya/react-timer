import { useEffect , useState } from "react"

const GoodTimer = () => {
    const [time, setTime] = useState<number>(0)
    const [timerState, setTimerState] = useState<boolean>(false)
    useEffect(() =>{
    if(!timerState){
        let interval = setInterval(() =>{
            setTime(t => t+0.1)
        } , 100)
        return () => clearInterval(interval)
    }else{

        setTime(time)
    }
    } , [timerState])
    
    
    return (
    <>
    <div>GoodTimer</div>
    <h1>Good Timer</h1>
    <div>{time.toFixed()}</div>
    <button onClick={() => setTimerState(true)}>Stop Time</button>
    <button onClick={() => setTimerState(false)}>Start Time</button>
    </>
  )
}

export default GoodTimer
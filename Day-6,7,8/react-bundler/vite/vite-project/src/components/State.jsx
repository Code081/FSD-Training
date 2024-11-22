import React, {useState} from 'react'

const State = () => {
    const [count, setCount] = useState(0)
return (
    <div>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increasing</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decreasing</button>
        <h2>{Count}</h2>
    </div>
)
}

export default State
import React, {useState} from 'react'

const State = () => {
    const [count, setCount] = useState(0)
    const[color, setColor] = useState('red')
return (
    <div>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increasing</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decreasing</button>
        <h2>{count}</h2>

        <h1 style={{color : color }}>My Favourite Color is {color} !</h1>
        <button onClick={()=>{
            setColor('blue')
        }}>Blue</button>
        <button onClick={()=>{
            setColor('red')
        }}>Red</button>
        <button onClick={()=>{
            setColor('green')
        }}>Green</button>
    </div>
)
}

export default State
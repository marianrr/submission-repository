import { useState } from "react";

const StatisticLine=({text, value})=>{
if(text==="positive")
  return (
    <>
    <tr>
    <td>{text}</td><td>{value}%</td>
    </tr>
    </>
  )

  return (
    <>
    <tr>
    <td>{text}</td><td>{value}</td>
    </tr>
    </>
  )
}

const Button=({onClick,text})=><button onClick={onClick}>{text}</button>

const Statistics=({good, neutral, bad})=>{
  if((!good)&&(!neutral)&&(!bad)) return (
    <>
    <p>No feedback given</p>
    </>)

  return(
    <>
    <table>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={good+neutral+bad} />
    <StatisticLine text="average" value={((good*1+neutral*0+bad*(-1))/9).toFixed(2)} />
    <StatisticLine text="positive" value={((good*100)/9).toFixed(2)} />
    </table>
    </>
  )
}

const App=()=> {
const [good,setGood]= useState(0)
const [neutral,setNeutral]= useState(0)
const [bad,setBad]= useState(0)
const onClickg=()=>setGood(good+1)
const onClickn=()=>setNeutral(neutral+1)
const onClickb=()=>setBad(bad+1)
  return (
    <div>
    <h1>give feedback</h1>
    <Button onClick={onClickg} text="good" />
    <Button onClick={onClickn} text="neutral" />
    <Button onClick={onClickb} text="bad" />
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;

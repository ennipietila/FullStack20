import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
        </tr>
    )
  }
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if (props.stats.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.stats.good} />
        <StatisticLine text='neutral' value={props.stats.neutral} />
        <StatisticLine text='bad' value={props.stats.bad} />
        <StatisticLine text='all' value={props.stats.all} />
        <StatisticLine text='average' value={props.stats.average} />
        <StatisticLine text='positive' value={props.stats.positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: (good + bad * (-1)) / all,
    positive: good / all * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics stats={stats} />      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
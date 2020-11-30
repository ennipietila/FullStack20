import React from 'react'

const Header = ({ course }) => {
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
}

const Part = (props) => {
    return (
      <div>
        <p>
          {props.name} {props.exercises}
        </p>
      </div>
    )
}

const Content = (props) => {
    const { course } = props
    return (
      <div>
        {course.parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
      </div>
    )
}

const Total = (props) => {
    const { course } = props
    const total = course.parts.reduce((total, part) => total += part.exercises, 0)
  
    return (
      <div>
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )
}


export default Course
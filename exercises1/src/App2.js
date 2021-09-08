import React from 'react'

const App2 = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

  return (
    <>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3} />
        <Total part1={part1} part2={part2} part3={part3} />
    </>
  );
}

const Header = (props) => {
  return (
      <>
        <h1>{props.course}</h1>
      </>
  )
}

const Content = (props) => {
  return (
      <>
          <Part name={props.part1.name} exercises={props.part1.exercises} />
          <Part name={props.part2.name} exercises={props.part1.exercises} />
          <Part name={props.part3.name} exercises={props.part1.exercises} />
      </>
  )
}

const Total = (props) => {
  return (
      <>
          <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
      </>
  )
}

const Part = (props) => {
    return (
        <>
            <p>{props.name} {props.exercises}</p>
        </>
    )
}

export default App2;

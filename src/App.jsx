import Pass from './Pass'
import Fail from './Fail'
import Result from './Result'
import './App.css'

function App() {
  let marks =[60,70,80,90];
  let name=['ali','maaz','sarim','sameer'];
  
  let students=[
    {
      name:'ali',
      marks:'60',
      color:'red'
    },

          {
            name: 'maaz',
            marks: 60,
            color: 'green'
        },
        {
            name: 'sarim',
            marks: 40,
            color: 'green'
        },
        {
            name: 'sameer',
            marks: 70,
            color: 'blue'
        },
  ]
  return(
  students.map(m=>(
    <Result
    marks={m.marks}
    name={m.name}
    color={m.color}
    />

  ))
  )
}

export default App

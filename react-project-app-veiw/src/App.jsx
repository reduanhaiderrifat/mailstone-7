
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singers from './Singgers'
import Bookstore from './BookStore'
function App() {
const actors = ['sakib','rifat','Ruble','shakkibul']
const singers =[
  {id:1, name:'Dr. Mahfuzar Rahoman',age : 68},
  {id:2,  name:'Dr. Eva Rahoman',age : 45},
  {id:3,  name:'Dr. Shuvo Rahoman',age : 34},
  {id:4 , name:'Pretom ',age :25},
]
const books =[
  {id: 1, name:'physics',price:100},
  {id: 2, name:'biology',price:200},
  {id: 3, name:'math',price:300},
  {id: 4, name:'bangla',price:400},
]
  return (
    <>
      
      <h1>Vite + React</h1>
      <Bookstore books={books}></Bookstore>
     { 
      singers.map(singer => <Singers singer={singer}></Singers>)
      
     }
      <Actor name={"bapparaj"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="learn react expplore core consept" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true}></Todo>
      <Device name="laptop"></Device>
      <Device></Device>
      <Device></Device>
      <Device></Device>
        <Person></Person>
        <Student grade="7" score="5"></Student>
        <Student grade="5" score="4"></Student>
        <Student grade={12} score={23}></Student>
        <Developer></Developer>
    </>
  )
}
function Person(){
  const age = 25;
  const money = 200
  const person = {name:'sakib',age:12}
  return <h3>I am a {person.name} with age: {age+money}</h3>
}
// const {grade,score}={grade:'7',score:'99'};
function Student({grade=1,score}){
  console.log(grade,score)
  return (
    <div>
      <h3>This is a student</h3>
      <p>Name:${grade}</p>
      <p>score:${score}</p>
    </div>
  )
}
function Device(){
  return <h2>This i s a device:</h2>
}
function Developer(){
  const developerStyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid purple'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>coding:</p>
    </div>
  )
}

export default App

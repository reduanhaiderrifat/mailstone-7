
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friend from './Friend'
function App() {

  function handleClick(){
    alert('button click')
  }
const handleClick2=()=>{
  alert('button 2 clicked')
}
const addToFive=(num)=>{
  alert(num+5)
}
  return (
    <>
    <Friend></Friend>
    <User></User>
    <Team></Team>
    <Counter></Counter>
   <h3>React core concept 2</h3>
   <button onClick={handleClick}>Click me</button>
   <button onClick={handleClick2}>Click2 me</button>
   <button onClick={()=>{alert('button3 clicked')}}>Click2 me</button>
   <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App

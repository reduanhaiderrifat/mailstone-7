import { useEffect, useState } from "react"
import Friend1 from "./Friend1"
export default function Friend(){
    const [friends,setfriends]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
    },[])
    return(
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend1 friend={friend}></Friend1>)
            }
        </div>
    )
}
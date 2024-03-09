// export default function Todo({task,isDone}){
//     task = "ami ghumabo"
//     return(
//         <li>Task:{task}</li>
//     )
// }
// export default function Todo({task,isDone}){
  
//     if(isDone === true){
//         return(
//             <li>Finished: {task}</li>
//         )
//     } else{
//         return (
//             <li>Work on : {task}</li>
//         )
//     }
// }

// conditional rendaring 
//  export default function Todo({task,isDone}){
//     if(isDone === true){
//         return(
//        <li>Finished: {task}</li>
//       ) 
//  }
//  return <li>Work on : {task}</li>
// }

//  export default function Todo({task,isDone}){   
//         return(
//        <li>{isDone ? 'Finished' : 'work on'}: {task}</li>
//       ) 
//  }
//  export default function Todo({task,isDone}){   
//         return(
//        <li>{task}{isDone && ': Done'}</li>
//       ) 
//  }
//  export default function Todo({task,isDone}){   
//         return(
//        <li>{task}{isDone || ': Do it'}</li>
//       ) 
//  }
 export default function Todo({task,isDone}){ 
    let listItem;  
      if(isDone){
        listItem = <li>Finish : {task}</li>
      } else{
        listItem=<li>work on : {task}</li>
      }
      return listItem
 }

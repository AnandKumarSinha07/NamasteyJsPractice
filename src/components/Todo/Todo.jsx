import React, { useEffect, useState } from 'react'

function Todo() {

  const [input,setInput]=useState('anand')  ;
  const [result,setResult]=useState([]);
  const [ticked,setTicked]=useState(false);
  //const [changeText,setChangeText]=useState('');

  useEffect(()=>{
    fetch('http://localhost:4000/getTodo')
    .then(res=>res.json())
    .then(data=>setResult(data))
    .catch(err=>console.log(err))
  },[])


  function addTodo(){
      fetch('http://localhost:4000/addTodo',{
         method:'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({ 
            user: input,        // send the username from input
            text: input,        // or another input for text
            completed: false
          })
      }).then(res=>res.json()).then(data=>{
           console.log("data",data)
           setResult([...result,data]);
           setInput('')
      })    
  }


  function deleteTodo(index){
    //  const filter=result.filter((_,i)=>i!=index)
    //  setResult(filter)
     fetch(`http://localhost:4000/todo/delete/${index}`,{
      method:'DELETE'
     }).then(()=>setResult(result.filter((_,i)=>i!=index)))
  }

  function completed(event){
    console.log(ticked)
    if(event===true){
        alert('completed')
    }
    else{
        alert('Not completed')
    }
    setTicked(!event)
  }

  function editTodo(){

  }

  return (
    
    <div style={{display:"flex",gap:"15px" ,backgroundColor:"red" ,marginTop:"-40px",padding:"40px", borderRadius:"3%",width:"fit-content", height:"400px",background:"linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"}}>

      
       <div style={{display:"flex", flexDirection:"column",gap:"15px"}}>
       <div style={{display:"flex", padding:"10px",gap:"10px"}}>
               <input type='text' placeholder='User Name'
                value={input}
                style={{padding:"2px 2px",fontSize:"1rem"}}
                onChange={(e)=>setInput(e.target.value)}/>
                <button style={{padding:"15px 22px"}} onClick={()=>addTodo()}>Add user</button>
                <textarea style={{textAlign:'center', paddingTop:"20px"}}>Enter Text</textarea>
                <button>Add Text</button>
                <input type='checkbox'/>
                </div>
       </div>
        
        <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
             {result.map((item,id)=>{

            return     item && (
                       <div style={{display:"flex",gap:"10px" , width:"auto"  , justifyContent:"center",alignContent:"center",color:"black",fontWeight:"bolder"}} key={id}>
                           <div>{item.text}</div>
                            <button  onClick={()=>deleteTodo(id)}>Delete</button>
                            <button onClick={()=>editTodo()}>Edit</button>
                            <input type='checkbox' style={{width:"20px"}} 
                            onChange={(e)=>
                            {
                                setTicked(e.target.checked)
                                completed(e.target.checked)
                            }} 
                             />
                        </div>
            )
        })}
        </div>
       
    </div>
  )
}

export default Todo
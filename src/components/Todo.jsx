import React, { useState } from 'react'

function Todo() {

  const [input,setInput]=useState('anand')  ;
  const [result,setResult]=useState([]);
  const [ticked,setTicked]=useState(false);
  //const [changeText,setChangeText]=useState('');


  function addTodo(){
      setResult([...result,input]);
      setInput('')
  }

  function deleteTodo(index){
     const filter=result.filter((_,i)=>i!=index)
     setResult(filter)
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
               <input type='text' placeholder='Enter Text'
                value={input}
                style={{padding:"10px 8px",fontSize:"1rem"}}
                onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={()=>addTodo()}>Add</button>
       </div>
        
        <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
             {result.map((item,id)=>{

            return     item && (
                       <div style={{display:"flex",gap:"10px" , width:"auto"  , justifyContent:"center",alignContent:"center",color:"black",fontWeight:"bolder"}} key={id}>
                           <div>{item}</div>
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
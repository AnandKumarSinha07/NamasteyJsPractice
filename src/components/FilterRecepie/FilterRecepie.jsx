import React, { useState } from "react";
import data from "../utils/data";
import RecipeCard from "./Filtercard";
import { useSelector } from 'react-redux'

function FilterRecepie() {

  const [filter,setFilter]  = useState(data)
  const [rating,setRating]=useState(0);
  const [avg,setAvg] = useState(4.67*10);
  const counter = useSelector((state) => state.card.value)


  function filterCard(){
     
      const filterCard=data.filter((item)=>item.rating>=rating);
      const avgCalculation=filterCard.reduce((acc,item)=>acc +item.rating,0).filter.length;
      console.log("avgCalculation",avgCalculation);

      let sum=0;
      for(let i=0;i<filterCard.length;i++){
         sum+=filterCard[i].rating;
      }
      console.log("sum is ",sum);
      setAvg(sum);
      setFilter(filterCard);
  }

  return (
    <>
         <h1 style={{textAlign:"center"}}>🍽️ Recipe Explorer</h1>
         <div style={{display:"flex",justifyContent:"space-between"}}>
                 <div>
                    <label style={{fontSize:"1.3rem"}}>Filter by rating </label>
                    <select style={{padding:"4px 9px" ,fontWeight:"bolder"}} 
                       onChange={(e)=>setRating(e.target.value)}
                       onClick={filterCard}
                       >
                        <option value="4.0">4.0 +</option>
                        <option value="4.3">4.3 +</option>
                        <option value="4.5">4.5 +</option>
                        <option value="4.7">4.7 +</option>
                        <option value="4.9">4.9 +</option>
                    </select>
                 </div>
                    <p style={{marginLeft:"-200px",fontSize:"1.5rem"}}>🛒 Cart Items: {counter}</p>
         </div>
          <h3 style={{textAlign:"center",fontWeight:"bold",fontSize:"1.4rem"}}>Average Rating  {avg/filter.length.toFixed(2)} ( {filter.length} ) receipes</h3>
         <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
            {filter.map((item, index) => (
                <RecipeCard key={index} recipe={item} />
            ))}
        </div>
    </>
   
  );
}

export default FilterRecepie;

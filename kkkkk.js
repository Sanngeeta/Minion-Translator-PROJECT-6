import "./styles.css";



// var  headingText="welcome";
// take user inputt
var  username="sangeeta"
// var username=prompt ('Give your name')

// var coloer="blue";

// banana js me eska use yese hoga 
// documet.querySelector("#username").innerText=username;




export default function App() {
  return (
    <div className="App">
      {/* <h1 style={{backgroundColor:coloer}}> Welcome {username}</h1> */}
     
     {/* name ka background coloer  lagane ke liye */}
      {/* <h1 > Welcome <span style={{color:'blue'}}>  */}


      {/* agar hame eksa use css or aap.js ke liye karna hai to hame id denhi hogi kuch es tarah*/}
      <h1 > Welcome <span id="username" style={{color:'blue'}}> 

       {username}</span> </h1>

    




    </div>
  );
}

// style take 
// {/* es tarike se ham js me coloer {backgroundColoer:coloer} de sakte hai */}





import "./styles.css";

export default function App() {

// jab bhi like ka button lelte hi to likeClickHandler ek callback function leta hai

function likeClickHandler(){
  console.log('clicked')
}


  return (
    <div className="App">
      <h1>Hello inside</h1>
      <button onClick={likeClickHandler}> Like Me</button>
    </div>
  );
}





// import the this function for counter the how many like we have

import "./styles.css";
import React,{ useState } from "react";

export default function App() {
  const [clickcounter,setLikeCounter]=useState(0)

// jab bhi like ka button lelte hi to likeClickHandler ek callback function leta hai
// var clickcounter=0
function likeClickHandler(){
  const newLikeCounter=clickcounter+1
  setLikeCounter(newLikeCounter)
console.log("cilick",newLikeCounter)

 

}
  return (
    <div className="App">
      <h1>Hello inside</h1>
      <button onClick={likeClickHandler}> Like Me</button>{clickcounter}
    </div>
  );
}


// input botton









import "./styles.css";
import React, { useState } from "react";



var imogiDec={
  "😄":"Smaile",
  "😶":"disbelife",
  "😑":"sad",
  "🥡":"takeout box",
  "💌":"love",
  "😔":"annoyance",
  "❤️":"hart",
  "😡":"anger",
  "🤔":"thinking",
  "🤒":"not well",
  "😘":"love kiss"

};

var emojibyUser=Object.keys(imogiDec)
export default function App() {
  var [meaining,steUserMeaning]=useState('')
  function emojiInput(event){
    var userInput=event.target.value
    var meaining=imogiDec[userInput]
   
    
    if (meaining===undefined){
      meaining="we dopn't have this in our database"
    }
    steUserMeaning(meaining)
}


function emojiClick(emoji){
  var meaining=imogiDec[emoji]
  steUserMeaning(meaining)


}

  return (
    <div className="App">
      <h1>Welcome inside out!</h1>
      <input onChange={ emojiInput}></input>
      <h2>meaning {meaining}</h2>
      <h3>Emojis we know</h3>


      {emojibyUser.map(function(emoji){
        return <span 
        onClick={()=>emojiClick(emoji)}
        style={{fontSize:"2rem",padding:"0.5rem",cursor:"pointer"}} key={emoji}>{emoji}</span>

      })}
    </div>
  );
  }

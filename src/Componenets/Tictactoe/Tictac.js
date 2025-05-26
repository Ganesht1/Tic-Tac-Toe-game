import React, {useRef, useState } from 'react';
import "./Tictac.css";

let data=["","","","","","","","",""];
export default function Tictac() {
 

   
    let [count,setcount]=useState(true);
    const [lock,setlock] = useState(false);
    const inputref =useRef();
    let box1 =useRef();
    let box2 =useRef();
    let box3 =useRef();
    let box4 =useRef();
    let box5 =useRef();
    let box6 =useRef();
    let box7 =useRef();
    let box8 =useRef();
    let box9 =useRef();
    let boxs =[box1,box2,box3,box4,box5,box6,box7,box8,box9];

    function showitems(e,index){
    
      if(lock){
        return 0;
      }
      else{
        if(count){
          e.target.innerHTML="❌";
          data[index]="❌";
          setcount(false);

  
        }else{
          e.target.innerHTML="⭕";
          data[index]="⭕";
          setcount(true)
  
        }

      }

      const checkwon =() =>{
        if(data[0]=== data[1] && data[1]===data[2] && data[2]!==""){
          winner(data[0])
        
     
  
        }
        if(data[3]=== data[4] && data[4]===data[5] && data[5]!==""){
          winner(data[3])
        
  
        }
        if(data[6]=== data[7] && data[7]===data[8] && data[8]!==""){
          winner(data[6])
         
  
        }
        if(data[0]=== data[3] && data[3]===data[6] && data[6]!==""){
          winner(data[0])
        
  
        }
        if(data[1]=== data[4] && data[4]===data[7] && data[7]!==""){
          winner(data[1])
         
  
        }
        if(data[2]=== data[5] && data[5]===data[8] && data[8]!==""){
          winner(data[2])
        
  
        }
        if(data[0]=== data[4] && data[4]===data[8] && data[8]!==""){
          winner(data[0])
         
  
        }
        if(data[2]=== data[4] && data[4]===data[6] && data[6]!==""){
          winner(data[2])
         
  
        }
      }
      checkwon();
      
      
      
     
    }
    
 
     

      function winner(winner){
        setlock(true);
        inputref.current.innerHTML=`Congratulaion winner ${winner} `;
        
      }

      function deleteitems(){
        inputref.current.innerHTML=`Tic Tac Toe Game in <span>React</span>`
        boxs.map((el)=>
          el.current.innerHTML=""

        )
         data=["","","","","","","","",""];
        setlock(false);

      }
    
  
  



  return (
    <div className='container'>
        <h2 ref={inputref}>Tic Tac Toe Game in <span>React</span></h2>
        <div className='boxs'>
            <p ref={box1} onClick={(e)=>showitems(e,0)}></p>
            <p ref={box2} onClick={(e)=>showitems(e,1)}></p>
            <p ref={box3} onClick={(e)=>showitems(e,2)}></p>
            <p ref={box4} onClick={(e)=>showitems(e,3)}></p>
            <p ref={box5} onClick={(e)=>showitems(e,4)}></p>
            <p ref={box6} onClick={(e)=>showitems(e,5)}></p>
            <p ref={box7} onClick={(e)=>showitems(e,6)}></p>
            <p ref={box8} onClick={(e)=>showitems(e,7)}></p>
            <p ref={box9} onClick={(e)=>showitems(e,8)}></p>
        </div>
        <button onClick={deleteitems}>Reset</button>
    </div>
  )
}

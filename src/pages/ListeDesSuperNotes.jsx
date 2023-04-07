import React, { useEffect, useState } from 'react';
import { pb } from '../script/pocketbase';
import ResumeNote from '../components/ResumeNote';


const ListeDesSuperNotes = () => {
  const [state, setState] = useState([])  
    

  
  const data = async () => {
    try {
        const records = await pb.collection('sebTomToDoList').getFullList();
        setState(records);
    } catch (e) {
        console.log(e)
    }
    
  } 
    useEffect(() =>{
        data()
    }, [])
  
    return (
        <div>
            {state.map((el, index)=>{
                return(
                    <ResumeNote note={el} key={index}/>
                )
            })}
        </div>
    );
};

export default ListeDesSuperNotes;
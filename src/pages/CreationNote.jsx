import React, { useState } from "react";
import PocketBase from "pocketbase";

const CreationNote = () => {
  const [data, setData] = useState({});
  
  const note = async () => {
    const record = await pb.collection("sebTomToDoList").create(data);
  };

  const pb = new PocketBase("https://louisrvl.fr/pocketbase");
  return (
    <div>
      <input
        placeholder="Title"
        type="text"
        onChange={(e) => setData((old)=>{return { ...old, title: e.target.value}})}
      />
      <input
        placeholder="Description"
        type="text"
        onChange={(e) => setData((old)=>{return { ...old, desc: e.target.value}})}
      />
      <div>
        ça fait :
            <button onClick={()=>{console.log(data)}}/>
      </div>
    </div>
  );
}


export default CreationNote;

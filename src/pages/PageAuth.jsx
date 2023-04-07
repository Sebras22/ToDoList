import PocketBase from "pocketbase";
import React, { createRef, useState } from "react";
import { pb } from "../script/pocketbase";
import "../pages/PageAuth.css"


const Authentification = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState("");
  const [log, setLog] = useState("");
  const usernameRef = createRef();
  const passwordRef = createRef();

  /*const login = async () => {
        console.log(name, password);
        try {
            const authData = await pb.collection('sebTomAuthToDo').authWithPassword(name, password);
            setMess('Tout est bon seb')
        } catch {
            setMess('erreur mauvais login')
        }
        
    }*/

  const login = async () => {
    console.log(name, password);
    try {
      const authData = await pb
        .collection("sebTomAuthToDo")
        .authWithPassword(usernameRef.current.value, passwordRef.current.value);
      setMess("Tout est bon seb");
      usernameRef.current.value = ""
      passwordRef.current.value = ""
    } catch {
      setMess("erreur mauvais login");
    }
  };

  // after the above you can also access the auth data from the authStore
  const authValid = () => {
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
  };

  // "logout" the last authenticated model
  const logout = async () => {
    try {
      pb.authStore.clear();
      setMess("Vous etes bien deconnecte");
    } catch {
      console.log(logout);
    }
  };

  return (
    <div className="Global">
      <input
        placeholder="Enter your email here"
        type="text"
        ref={usernameRef} /*onChange={(e) => setName(e.target.value)}*/
        className="Inputs"
      />
      <input
        placeholder="Enter your password here"
        type="text"
        ref={passwordRef} /*onChange={(e) => setPassword(e.target.value)}*/
        className="Inputs"
      />
      <button onClick={login} className="Buttons">login</button>
      <button onClick={logout} className="Buttons">logout</button>
      {mess}
    </div>
  );
};

export default Authentification;

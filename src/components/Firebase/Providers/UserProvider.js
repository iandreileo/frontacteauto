import React, {useState, useEffect,  createContext} from "react";
import { auth } from '../Services/firebase';
import {backendAuth} from '../../../api';

export const UserContext = createContext();

const UserProvider  = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //component did mount
    auth.onAuthStateChanged(async (us) => {
      // backendAuth(us.uid).then(res => console.log("res" + res));
      if(us !== null) {
        console.log(backendAuth(us.uid));
      }
      setUser(us); 
      // console.log(us)
    });


  });

  return (
    <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider;
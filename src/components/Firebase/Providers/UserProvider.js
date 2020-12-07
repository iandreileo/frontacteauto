import React, {useState, useEffect,  createContext} from "react";
import { auth } from '../Services/firebase';
import {backendAuth} from '../../../api';

export const UserContext = createContext();

const UserProvider  = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged( async (us) => {
      if(us !== null) {
        auth.currentUser.getIdToken(/* forceRefresh */ true).then(async function(idToken) {
          // Send token to your backend via HTTPS
          var currentUser = await backendAuth(idToken);
          let merged = {...us, ...currentUser};
          setUser(merged); 
          console.log(user);
          console.log(idToken);
          // ...
        }).catch(function(error) {
          // Handle error
        });
      }
    });


  }, [setUser]);

  return (
    <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider;
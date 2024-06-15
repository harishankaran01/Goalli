import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState();
  const [isLoading,setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const LogIn=(Name)=>{
    setIsLoading(true);
    setUserToken("buvgv");
    AsyncStorage.setItem("userToken","buvgv");
    AsyncStorage.setItem("userName",Name);
    setUserName(Name);
    setIsLoading(false);
  }
  const LogOut=()=>{
    setIsLoading(true);
    setUserToken();
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userName");
    setUserName("");
    setIsLoading(false);
  }

 const logDetails=async()=>{
  try{
    setIsLoading(true);
    const userTokeN= await AsyncStorage.getItem("userToken");
    const userNAme= await AsyncStorage.getItem("userName");
    console.log(userNAme);
    setUserToken(userTokeN);
    setUserName(userNAme);
    setIsLoading(false);
  }
  catch(err){
    console.log(err.message);
  }
 }
 useEffect(()=>{
  logDetails();
  },[] )
  return (
    <AuthContext.Provider value={{userToken,isLoading,LogIn,LogOut,setUserToken,userName}}>
      {children}
    </AuthContext.Provider>
  );
};

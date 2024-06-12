import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState();
  const [isLoading,setIsLoading] = useState(false);
  const LogIn=()=>{
    setIsLoading(true);
    setUserToken("buvgv");
    AsyncStorage.setItem("userToken","buvgv");
    setIsLoading(false);
  }
  const LogOut=()=>{
    setIsLoading(true);
    setUserToken();
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  }

 const logDetails=async()=>{
  try{
    setIsLoading(true);
    const userTokeN= await AsyncStorage.getItem("userToken");
    setUserToken(userTokeN);
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
    <AuthContext.Provider value={{userToken,isLoading,LogIn,LogOut,setUserToken}}>
      {children}
    </AuthContext.Provider>
  );
};

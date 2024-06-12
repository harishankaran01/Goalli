import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Login from './Auth/Login';
import { AuthContext } from './Context/AuthContext';
import Hello from '../app/home/Hello';

export default function AppNavigation() {
  const { userToken,isLoading} = useContext(AuthContext);
    if(isLoading) {
        return(
        <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
            <ActivityIndicator color="black" size={24}/>
        </View>
        )
       
    }
  return (
    <View style={styles.container}>
      {userToken ? <Hello /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

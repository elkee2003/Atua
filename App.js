/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';

 import React, { useEffect } from 'react';
 import {
 StatusBar,
 PermissionsAndroid,
 Platform
 } from 'react-native';
 import Geolocation from '@react-native-community/geolocation';

import Router from './src/Navigation/Root'

 navigator.geolocation = require('@react-native-community/geolocation');
 
 const App = ()=>{

  const androidPermission = async () =>{
    try {
      const granted = await             PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Atua location Permission",
          message:
            "Atua needs access to your location " +
            "to make your experience better.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Atua");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(()=>{
    if(Platform.OS === 'android'){
      androidPermission()
    }else{
      // IOS
      Geolocation.requestAuthorization()
    }
  },[])

   return(
      <>
      <StatusBar/>
      <Router/>
      </>
   )
 }
 
 export default App;
 

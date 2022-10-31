import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Home';

const Drawer = createDrawerNavigator()

const DummyScreen = (props)=>{
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>{props.name}</Text>
  </View>
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name='Your Packages'>
          {()=> <DummyScreen name={'Your Packages'}/>}
        </Drawer.Screen>

        <Drawer.Screen name='Help'>
         {()=> <DummyScreen name={'Help'}/>}
        </Drawer.Screen>

        <Drawer.Screen name='Wallet'>
         {()=><DummyScreen name={'Wallet'}/>}
        </Drawer.Screen>

        <Drawer.Screen name='Settings'>
          {()=><DummyScreen name={'Settings'}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
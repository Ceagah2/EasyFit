import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isLoggedIn, isOnboarded } from '../store/atoms';
import Home from '../screens/Home';
import IntroSlider from '../screens/IntroSlider';
import {  useAtomValue } from 'jotai';
import Login from '../screens/Login';


const Router = () => {
  const Stack = createNativeStackNavigator();
  const onboarded = useAtomValue(isOnboarded)
  const loggedIn = useAtomValue(isLoggedIn)
  const initialRoute = onboarded ? "Home" : loggedIn ? "Login" : "Intro";

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={IntroSlider} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
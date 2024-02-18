import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai';
import React from 'react';
import Home from '../screens/Home';
import IntroSlider from '../screens/IntroSlider';
import Login from '../screens/Login';
import { isLoggedInAtom, isOnboardedAtom } from '../store/atoms';


const Router = () => {
  const Stack = createNativeStackNavigator();
  const onboarded = useAtomValue(isOnboardedAtom)
  const loggedIn = useAtomValue(isLoggedInAtom)
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
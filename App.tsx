import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';

import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
 } from '@expo-google-fonts/montserrat';

import { Lato_400Regular } from '@expo-google-fonts/lato';
import Router from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Lato_400Regular
  });

 

  return (
    <>
      {fontsLoaded ? <Router /> : <ActivityIndicator />}
    </>
  );
}

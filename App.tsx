import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Router />
    </NavigationContainer>
  );
}

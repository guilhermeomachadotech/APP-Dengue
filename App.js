import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/pages/Splash';
import MenuScreen from './src/pages/Menu';
import HomeScreen from './src/pages/Home';
import Transmissao from './src/pages/Transmissao';
import Devs from './src/pages/Devs';
import Sintomas from './src/pages/Sintomas';
import Tratamento from './src/pages/Tratamento/Tratamento';
import Automedicacao from './src/pages/Automedicacao/Automedicacao';
import Fontes from './src/pages/Fontes';
import Medicamentos from './src/pages/Medicamentos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen} options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Menu' component={MenuScreen} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Devs' component={Devs} options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Fontes' component={Fontes}options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Transmissao' component={Transmissao} options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Sintomas' component={Sintomas}options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Tratamentos' component={Tratamento} options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Automedicacao' component={Automedicacao} options={{
          headerShown:false,
        }}></Stack.Screen>
        <Stack.Screen name='Medicamentos' component={Medicamentos} options={{
          headerShown:false,
        }}></Stack.Screen>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}



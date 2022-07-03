import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screen/login';
import menu from './screen/menu';
import OlvidoContraseña from './screen/OlvidoContraseña';
import CrearCuenta from './screen/CrearCuenta';
import BuscarUsuario from './screen/BuscarUsuario';

//const MenuInferior = createDrawerNavigator();
const Stack = createNativeStackNavigator();

//Clase principal

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown:false}}
              name="login"
              component={login}/>
            <Stack.Screen 
              options={{headerShown:false}}
              name="menu"
              component={menu}/>
            <Stack.Screen 
              options={{headerShown:false}}
              name="OlvidoContraseña"
              component={OlvidoContraseña}
            />
            <Stack.Screen 
              options={{headerShown:false}}
              name="CrearCuenta"
              component={CrearCuenta}
            />
            <Stack.Screen 
              options={{headerShown:false}}
              name="BuscarUsuario"
              component={BuscarUsuario}
            />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;






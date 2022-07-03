import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Ventanas del menu inferior
import Trabajos from '../screen/screenMenuInferior/Trabajos';
import Configuracion from '../screen/screenMenuInferior/Configuracion';
import Guardados from '../screen/screenMenuInferior/Guardados';
import Publicar from '../screen/screenMenuInferior/Publicar';

//const MenuInferior = createDrawerNavigator();
const NavigatorTab = createBottomTabNavigator();

function TabInferior() {
    return (
        <NavigatorTab.Navigator>
          <NavigatorTab.Screen 
          name="Trabajos" 
          component={Trabajos} 
          />
          <NavigatorTab.Screen 
          name="Guardados" 
          component={Guardados} 
          />
          <NavigatorTab.Screen 
          name="Publicar" 
          component={Publicar} 
          />
          <NavigatorTab.Screen 
          name="Configuracion" 
          component={Configuracion} />
        </NavigatorTab.Navigator>
    );
}

export default TabInferior;
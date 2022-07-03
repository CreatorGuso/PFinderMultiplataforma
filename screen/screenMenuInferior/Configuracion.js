import React,{ useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput,SafeAreaView} from "react-native";

//Aqui entra el {navigation} entre los parentecis.
const OlvidoContraseña = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');

  const Actualizar = () =>{
    navigation.navigate('login');
  };
  const Cancelar = () =>{
    navigation.navigate('login');
  };
   return (
    <View style={styles.container}>
      <View>
        <View>
        <TouchableOpacity
        style={styles.button}
        onPress={Actualizar}>
        <Text>Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={Cancelar}>
        <Text>Configuracion</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={Cancelar}>
        <Text>Pendientes</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={Cancelar}>
        <Text>Completados</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={Cancelar}>
        <Text>Cerrar Sesion</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    marginTop:25,
  },
  button:{
    top:10,
    alignItems:'center',
    backgroundColor:'#DDDDDD',
    padding: 10,
    margin:10,
  },
});

export default OlvidoContraseña;
import React, { useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Alert} from "react-native";

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  //Funcion que permite verificar contraseña 
  const onPress = () =>{
    if (usuario=="gustavo" && contrasena=="123456789") {
      navigation.navigate('menu');
    } else {
      Alert.alert('Error','Fallo de Contraseña',[
        {
          text:'Volver a intentar',
        },
        {
          text:'Olvido su contraseña',
          style:'destructive',
        },
      ])
    }
  };
  //Funcion que redirecciona a la ventana olvido su contraseña.
  const OlvidoContraseña = () =>{
    navigation.navigate('OlvidoContraseña');
  };
  //Funcion que redirecciona a la ventana de crear cuenta nueva.
  const CrearCuenta = () =>{
    navigation.navigate('CrearCuenta');
  };
  //Contenido de vista
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.text}>
          <Text style={styles.titulo}>Bienvenido</Text>
        </View>
        <View style={styles.viewImage}>
          <Image style={styles.imagen} source={require('../img/LogoFinder.png')}/>
        </View>
        <TextInput
        style={styles.inputext}
        onChangeText={(val)=> setUsuario(val)}
        placeholder="Ingresar Usuario"
        />
        <TextInput
        style={styles.inputextContrasena}
        onChangeText={(val)=> setContrasena(val)}
        placeholder="Ingresar Contraseña"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text>Iniciar Sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={OlvidoContraseña}>
        <Text>Olvido su Contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={CrearCuenta}>
        <Text>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    marginTop:25,
  },
  text:{
     alignItems: 'center',
     padding: 10,
  },
  titulo:{
    fontSize:30,
  },
  viewImage:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen:{
    width:150,
    height:150,
  },
  inputext:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
    margin:15,
    marginTop:50,
  },
  inputextContrasena:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
    margin:15,
  },
  button:{
    top:10,
    alignItems:'center',
    backgroundColor:'#DDDDDD',
    padding: 10,
    margin:10,
  },
});

export default Login;

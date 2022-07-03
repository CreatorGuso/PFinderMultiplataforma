import React,{ useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput} from "react-native";

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
        <View style={styles.text}>
          <Text style={styles.titulo}>Bienvenido</Text>
          <Text style={styles.titulo}>*nombre de usuario*</Text>
        </View>
        <View style={styles.viewImage}>
          <Image style={styles.imagen} source={require('../img/LogoFinder.png')}/>
        </View>
        <Text style={styles.textPassword}>Nueva contraseña</Text>
        <TextInput
        style={styles.inputPassword}
        onChangeText={(val)=> setUsuario(val)}
        placeholder="Nueva contraseña"
        />
        <Text style={styles.textPassword2}>Contraseña Nuevamente</Text>
        <TextInput
        style={styles.inputPassword2}
        onChangeText={(val)=> setCorreo(val)}
        placeholder="Contraseña Nuevamente"
        />
        <TouchableOpacity
        style={styles.button}
        onPress={Actualizar}>
        <Text>Actualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={Cancelar}>
        <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    marginTop:25,
  },
  text:{
    marginTop:50,
     alignItems: 'center',
     padding: 10,
  },
  textPassword:{
     marginTop:20,
     alignItems: 'center',
     padding: 10,
  },
  textPassword2:{
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
  inputPassword:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
    margin:15,
  },
  inputPassword2:{
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

export default OlvidoContraseña;
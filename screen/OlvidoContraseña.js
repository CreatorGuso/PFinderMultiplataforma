import React,{ useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput} from "react-native";

//Aqui entra el {navigation} entre los parentecis.
const OlvidoContraseña = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');

  const Buscar = () =>{
    navigation.navigate('BuscarUsuario');
  };
  const Cancelar = () =>{
    navigation.navigate('login');
  };
   return (
    <View style={styles.container}>
      <View>
        <View style={styles.text}>
          <Text style={styles.titulo}>Bienvenido</Text>
        </View>
        <View style={styles.viewImage}>
          <Image style={styles.imagen} source={require('../img/LogoFinder.png')}/>
        </View>
        <Text style={styles.textUser}>Nombre de Usuario</Text>
        <TextInput
        style={styles.inputextUsuario}
        onChangeText={(val)=> setUsuario(val)}
        placeholder="Ingresar Usuario"
        />
        <Text style={styles.textCorreo}>Correo Electronico</Text>
        <TextInput
        style={styles.inputextCorreo}
        onChangeText={(val)=> setCorreo(val)}
        placeholder="Ingresar Correo"
        />
        <TouchableOpacity
        style={styles.button}
        onPress={Buscar}>
        <Text>Buscar Usuario</Text>
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
  textUser:{
     marginTop:50,
     alignItems: 'center',
     padding: 10,
  },
  textCorreo:{
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
  inputextUsuario:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
    margin:15,
  },
  inputextCorreo:{
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
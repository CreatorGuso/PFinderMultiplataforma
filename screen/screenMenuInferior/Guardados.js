import React,{Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,Button} from 'react-native';

function Item({title, image}){
  return(
    <View>
        <View style={styles.container}>
          <Image style={styles.imageUsuario} source={{uri: image}}/>
          <Text style={styles.numbreUsuario}>{title}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{uri: image}}/>
        </View>
    </View>
  );
}

class ConexionFetch extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      textValue:0,
      count: 0,
      items: [],
      error: null,
    };
  }

  async componentDidMount(){
    await fetch('https://yts.mx/api/v2/list_movies.json/')
    .then(res =>res.json())
    .then(
      result =>{
        console.warn('result', result.data.movies);
        this.setState({
          items: result.data.movies,
        });
      },
      error => {
        this.setState({
          error: error,
        });
      },
    );
  }
  render(){
    return(
      <View>
          <FlatList
          data={this.state.items.length > 0 ? this.state.items :[]}
          renderItem={({item}) =>(
            <View>
                <Item title={item.title} image={item.small_cover_image}/>
                <View style={styles.containerButtom}>
                  <Button 
                    title="Ver mas" />
                  <Button 
 
                    title="Quitar" />
                  <Button 

                    title="Contactar" />  
                </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    padding: 20,
  },
  containerButtom:{
    flexDirection: "row-reverse",
    padding:20,
  },
  imageUsuario:{
    height:50, 
    width:50,
    marginBottom:10,
    padding:20,
    borderRadius:25,
  },
  image:{
    marginBottom:10,
    padding:10,
    alignSelf: 'center',
    height:200, 
    width:200,
  },
  numbreUsuario: {
    marginLeft:20,
    alignSelf: 'center',
    marginTop:-15,
    flex: 0.8,
  }
});

//boton de navigator para enviar informacion
{/* <Button onPress={() => 
                    this.props.navigation.navigate('Informacion',{ miID: item.id,
                    titulo:item.title,synopsis:item.synopsis,imagen:item.small_cover_image})} 
                    title="informacion" /> */}

export default ConexionFetch;

import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { HitTestResultTypes } from 'expo/build/AR';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      desc: "",
      temp:"",
      loc: "",
      icon:"",
    };
  }
  
  getUserFromApi = (loc) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q= ${loc} &units=metric&appid=d34e3e33c04f0fe5f39582556001255f`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState((prevState, props) => ({
          isLoading: false,
          desc: responseJson.weather[0].description,
          icon: responseJson.weather[0].icon,
        
          temp: responseJson.main.temp
          
        }));
      })
      .catch(error => console.log(error));
  };

    
  render() {

    const data = this.state.data

    let locFunct= () =>{
      const loc = this.state.loc
      this.getUserFromApi(loc)

    }   
    return (
      
     
      
    <View style={styles.container}>
      <TextInput
      style={{height: 40}}
      placeholder="Type Loc"
      onChangeText={loc =>{ this.setState({loc})}}
      />
        <Text
        style={{
          marginTop: 60,
          fontSize: 25
        }}
      >
        {this.state.loc
          }
      </Text>
        
        <TouchableOpacity onPress= {locFunct}>
        <Text>touch</Text>
        </TouchableOpacity>

       
      <Text> {this.state.desc} </Text>
      <Text> {this.state.temp} </Text>

     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
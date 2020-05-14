import React from 'react';
import { StyleSheet,ToastAndroid, Text,StatusBar,ImageBackground , View,TextInput,Image,Keyboard, TouchableOpacity } from 'react-native';
// import Weather from '../Components/weather'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {weatherConditions } from '../Utils/weather'
import { fetchWeather } from '../FetchData/WeatherData';

import HeaderBar from "../Utils/HeaderBar"

export default class WeatherScreen extends React.Component {

   
  constructor(props){
    super(props)
    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)

    this.loc = props.loc;
    this.state = {
    isLoading: true,
    temperature: 0,
    weather: null,
    location: null,
    humidity: null,
      loc: "",
      isVisible: true
    
    }
  }
  UNSAFE_componentWillMount() {
 
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
  }

  UNSAFE_componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = event => {
    this.setState({
      isVisible: false
    })
  }

  keyboardWillHide = event => {
    this.setState({
      isVisible: true
    })
  }
  componentDidMount() {
   
    navigator.geolocation.getCurrentPosition(
      position => {
        var lat =  position.coords.latitude 
        var lon = position.coords.longitude
        fetchWeather(lat, lon)
        .then(data => {
          this.setState({
            temperature: data.main.temp,
            weather: data.weather[0].main,
            isLoading: false,
            location: data.name,
            humidity: data.main.humidity
          });
    
        })
      })
     }

    locn = (loc) => {
       
       fetchWeather(undefined,undefined,loc)
        .then(resJson => {
        
          if (resJson.cod == '404') {
            ToastAndroid.show("Sorry city not found ",ToastAndroid.SHORT)
          }
            
          else {
            this.setState({
              isLoading: false,
              temperature: resJson.main.temp,
              weather: resJson.weather[0].main,
              location: resJson.name,
              humidity: resJson.main.humidity,
              loc: null
            
            
            });
          }
        })
        .catch( ToastAndroid.show("Sorry unable to fetch data",ToastAndroid.SHORT));
    };
  
  
  render() {
    let locFunct= () =>{
      const loc = this.state.loc
      this.locn(loc)

    } 
    

    const { isLoading, weather, temperature, location, humidity } = this.state

    return (
      
      <View style={styles.container}>
      <StatusBar hidden />
        <HeaderBar height={25} fontSize={8} capFontSize={12}  />
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text stlye={styles.loadingText}>Fetching Your Weather</Text>
          </View>
        ) : (
           
            <ImageBackground
             
              source={{uri:weatherConditions[weather].img}}
              style={[ styles.weatherContainer]}>

            <View>
            <TextInput
               style={styles.inputBox}
               placeholder="search..."
               placeholderTextColor = "#000"
               value={this.state.loc}
     
              onSubmitEditing={locFunct}
              onChangeText={loc =>{ this.setState({loc})}}/>
           </View>
          
           <View style={[styles.headerContainer]}>
           <Text style={styles.locText}>{location}</Text>
    
           </View>
       
          <View style={[styles.headerContainer ,styles.tempBox]}>
              <Text style={styles.tempText}>{parseInt(temperature)}˚C</Text>
          </View>
          <View style={styles.bodyContainer}>
              <View style={styles.headerContainer}>
              <MaterialCommunityIcons
                size={100}
                name={ weatherConditions[weather].icon}
                color={'#fff'}
            />
          </View>
              <Text style={styles.title}>{weatherConditions[weather].title}</Text>
              <Text style={styles.subtitle}>{weatherConditions[weather].subtitle} </Text>
              <Text style={styles.subtitle}> Humidity: {humidity}% </Text>
          </View>
       </ImageBackground >
             
            )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  weatherContainer: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  },



  headerContainer: {
  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempBox: {
    marginTop:10,
    backgroundColor: 'white',
    opacity: 0.4,
    textAlign: 'center',
    borderRadius: 15,
    
    alignSelf:"center",
    height:100, 
    width:200 
 
   
    
  },
  tempText: {
    fontWeight:"bold",
    fontSize: 50,
    color: '#000',
    opacity: 1,
  },
  locText: {
    marginTop:70,
    fontSize: 20,
    color: 'grey',
    opacity: 1,
    fontWeight:"bold"
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 100
  },
  title: {
    fontSize: 30,
    color: '#fff'
  },
  subtitle: {
    fontSize: 15,
    color: '#fff'
  },
  time: {
    fontSize: 38,
    color: '#fff'
  },

  inputBox: {
   
    backgroundColor: 'white',
    opacity: 0.8,
    fontSize:15,
    textAlign: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf:"center",
    height: 30, 
    width:260 
  },
 
});





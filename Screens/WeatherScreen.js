import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,Keyboard, TouchableOpacity } from 'react-native';
// import Weather from '../Components/weather'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo'
import {weatherConditions } from '../Components/weather'
import { fetchWeather } from '../FetchData/WeatherData';
import { SearchBar } from 'react-native-elements';

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
      loc: null,
      isVisible: true
    
    }
  }
  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
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

     locn = (loc) =>{
       fetchWeather(null,null,loc)
        .then(resJson => {
          console.log(resJson)
          this.setState({
               isLoading: false,
               temperature: resJson.main.temp,
               weather: resJson.weather[0].main,
               location: resJson.name,
               humidity: resJson.main.humidity,          
               loc:null
            
          });
        })
        .catch(error => console.log(error));
    };
  
  
  render() {
    let locFunct= () =>{
      const loc = this.state.loc
      this.locn(loc)

    } 


 
    const { isLoading, weather, temperature, location, humidity } = this.state

    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text stlye={styles.loadingText}>Fetching Your Weather</Text> 
          </View>
          ) : (
           
            <View    
              style={[
                  styles.weatherContainer,
                  { backgroundColor: weatherConditions[weather].color } ]}
                 >
            <View>
            <TextInput
               style={styles.inputBox}
               placeholder="search..."
               placeholderTextColor = "#000"
               value={this.state.loc}
     
              onSubmitEditing={locFunct}
              onChangeText={loc =>{ this.setState({loc})}}/>
           </View>
           <View style={styles.headerContainer}>
              <Text style={styles.tempText}>Temp: {temperature}˚</Text>
          </View>
          <View style={styles.headerContainer}>
              <MaterialCommunityIcons
                size={100}
                name={weatherConditions[weather].icon}
                color={'#fff'}
            />
          </View>
          <View style={styles.headerContainer}>
              <Text style={styles.title}>{location}</Text>
       
          </View>
          <View style={styles.bodyContainer}>
              <Text style={styles.title}>{weatherConditions[weather].title}</Text>
              <Text style={styles.subtitle}>{weatherConditions[weather].subtitle} </Text>
              <Text style={styles.subtitle}> Humidity: {humidity}% </Text>
          </View>
    </View>
             
            )}
      </View>
    );
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
  headerContainer: {
    flex: 1,
   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
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
  tempText: {
    fontSize: 30,
    color: '#fff'
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
    opacity: 0.4,
    fontSize:15,
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf:"center",
    height: 35, 
    width:250 
  },
 
});





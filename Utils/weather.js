import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const weatherConditions = {
  Rain: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/rain.jpg?alt=media&token=d4acff63-1d47-4691-b34e-87323efc92ab',
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'Grab a cup of coffee',
    icon: 'weather-rainy',
    
  },
  Clear: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/clear.jpg?alt=media&token=1235bd0c-15a1-490e-be7d-4e6eaa65c4d6',
    color: '#f7f033',
    title: 'Sunny',
    subtitle: 'Wear sunglasses !',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/thunder.jpg?alt=media&token=eccfaed1-face-46c4-b2af-ea15f6b989b7',
    color: '#525252',
    title: 'A Storm is coming',
    subtitle: 'Oops better get inside !',
    icon: 'weather-lightning'
  },
  Clouds: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/cloud.jpg?alt=media&token=74c11f26-60e7-4b9a-99e5-f17487d4b032',
    color: '#403861',
    title: 'Cloudy',
    subtitle: 'With a chance of meatballs',
    icon: 'weather-cloudy'
  },

  Snow: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/snow.jpg?alt=media&token=c50a4829-afc0-430d-bf20-c32a8cf384a6',
    color: '#00d2ff',
    title: 'Snow',
    subtitle: 'Get out and build a snowman !',
    icon: 'weather-snowy'
  },
  Drizzle: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/drizzle.jpg?alt=media&token=0125102b-402f-498a-85e6-4d2e7b6650fe',
    color: '#076585',
    title: 'Drizzle',
    subtitle: 'It\'s partially raining',
    icon: 'weather-hail'
  },
  Haze: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/haze.jpg?alt=media&token=2d99ecea-3600-43d4-88dc-5b4125c56c5c',
    color: '#66A6FF',
    title: 'Haze',
    subtitle: 'May be some dust is there !',
    icon: 'weather-hail'
  },
  Mist: {
    img: 'https://firebasestorage.googleapis.com/v0/b/react-fc214.appspot.com/o/mist.jpg?alt=media&token=3b6dbad8-cdae-4585-a93a-85d2ba2428fb',
    color: '#3CD3AD',
    title: 'Mist',
    subtitle: "just some microscopic water droplets",
    icon: 'weather-fog'
  }
};

export default class Weather extends React.Component{
  constructor(props) {
    super(props);
    this.weather = props.weather,
    this.temperature= props.temperature,
    this.location = props. location,
    this.humidity = props.humidity

    this.state={
     loc : null
    }
   }

  //  ItemPress(item){
  //    this._b.loc()
  //  }

  render(){
  
    
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[this.weather].color }
      ]}
    >
     <View>
    

      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.tempText}>Temp: {this.temperature}˚</Text>
      </View>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={100}
          name={weatherConditions[this.weather].icon}
          color={'#fff'}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{this.location}</Text>
        {/* <Text style={styles.time}>{time}</Text> */}
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[this.weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[this.weather].subtitle}
        </Text>
        <Text style={styles.subtitle}>
          Humidity: {this.humidity}%
        </Text>
      </View>
    </View>
  );
    }
};


// Weather.propTypes = {
//   temperature: PropTypes.number.isRequired,
//   weather: PropTypes.string
// };


const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
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
  searchBox: {
    
  
    padding: 15,
  
  
  
    backgroundColor:"gray",
    borderRadius: 16,
    marginTop: -25,
  
    shadowOffset:{width: 2,height: 2},
    
    
    fontSize: 20,
  
    
  }
});


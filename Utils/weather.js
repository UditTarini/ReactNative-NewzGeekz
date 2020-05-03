import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const weatherConditions = {
  Rain: {
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'Grab a cup of coffee',
    icon: 'weather-rainy'
  },
  Clear: {
    color: '#f7f033',
    title: 'Super Sunny',
    subtitle: 'Wear sunglasses!',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    color: '#525252',
    title: 'A Storm is coming',
    subtitle: 'Better get inside!',
    icon: 'weather-lightning'
  },
  Clouds: {
    color: '#403861',
    title: 'Cloudy',
    subtitle: 'With a chance of meatballs',
    icon: 'weather-cloudy'
  },

  Snow: {
    color: '#00d2ff',
    title: 'Snow',
    subtitle: 'Get out and build a snowman!',
    icon: 'weather-snowy'
  },
  Drizzle: {
    color: '#076585',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'weather-hail'
  },
  Haze: {
    color: '#66A6FF',
    title: 'Haze',
    subtitle: 'Another name for Partly Raining',
    icon: 'weather-hail'
  },
  Mist: {
    color: '#3CD3AD',
    title: 'Mist',
    subtitle: "Microscopic water droplets",
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


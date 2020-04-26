import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
// import { weatherConditions } from '../utilities/weatherConditions';

const weatherConditions = {
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
const Weather = ({ weather, temperature, location, humidity, detail }) => {
    
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
    
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
        {/* <Text style={styles.time}>{time}</Text> */}
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
        <Text style={styles.subtitle}>
          Humidity: {humidity}%
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

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

export default Weather;
import React from 'react';
import { StyleSheet,StatusBar, Text, Image,ScrollView, View, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import NewzScreen from "./Screens/NewzScreen"
import ViewScreen from "./Screens/ViewScreen"
import HomeScreen from "./Screens/HomeScreen"

import NewspaperScreen from "./Screens/NewspaperScreen"
import WeatherScreen from "./Screens/WeatherScreen"


const StackNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen},
    NewzScreen: { screen: NewzScreen },
    ViewScreen: { screen: ViewScreen},
   

  },
  {  
    
   
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      title: "NewzGeekz",
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTitleStyle: {
        color: "#000",
        alignSelf: 'center',
        
      },
    
    
    
  }
}
)

const WeatherNav = createStackNavigator(
  { Weather: { screen: WeatherScreen},
  },{  
    
   
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerTintColor: "#fff",
      title:"NewzGeekz",
        headerStyle: {
        backgroundColor: "#fff",
        height:40
      },
      headerTitleStyle: {
        color: "#000",
        alignSelf: 'center',
        fontSize: 12
      },
    
    
    }
  }
)

const NewspaperNav = createStackNavigator(
  {
    Newspaper: { screen: NewspaperScreen },
    NewzScreen: { screen: NewzScreen },
    ViewScreen: { screen: ViewScreen},
  },{  
    headerLayoutPreset: 'center',
   
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      title:"NewzGeekz",
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTitleStyle: {
        color: "#000",
        alignSelf: 'center',
        
      },
    
    
    }
  }
)

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Stack: {
      screen: StackNavigator,
      navigationOptions: {
        title:"Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
          
        ),
     
        
      }
    },
    Weather: {
      screen: WeatherNav,
      navigationOptions: {
        title:"Weather",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-partly-sunny'} />
          </View>
        ),
     
        
      }
    },
    NewsPaper: {
      screen: NewspaperNav,
      navigationOptions: {
        title:"Newspaper",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'md-paper'} />
          </View>
        ),
     
       
      }
    },


  },
  {
    activeColor: '#F80B0B',
    inactiveColor: '#D1CCCC',
    barStyle: { backgroundColor: '#fff' },
    
  }
);

//create app container
const App = createAppContainer(TabNavigator);
export default App;


  


import React from 'react';
import {View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/Ionicons';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import NewzScreen from "./Screens/NewzScreen"
import ViewScreen from "./Screens/ViewScreen"
import HomeScreen from "./Screens/HomeScreen"

import NewspaperScreen from "./Screens/NewspaperScreen"
import WeatherScreen from "./Screens/WeatherScreen"
import MenuScreen from "./Screens/MenuScreen"

import NoInternet from "./Utils/NoInternet"

import { enableScreens } from 'react-native-screens';


const StackNavigator = createStackNavigator(
  {
  
    HomeScreen: { screen: HomeScreen},
    NewzScreen: { screen: NewzScreen },
    ViewScreen: { screen: ViewScreen},
    

  },
  { defaultNavigationOptions: {
    headerShown: false
  }}

)

const WeatherNav = createStackNavigator(
  { Weather: { screen: WeatherScreen},
  }, { defaultNavigationOptions: {
    headerShown: false
  }}
  
)

const NewspaperNav = createStackNavigator(
  {
    Newspaper: { screen: NewspaperScreen },
    NewzScreen: { screen: NewzScreen },
    ViewScreen: { screen: ViewScreen},
  }, { defaultNavigationOptions: {
    headerShown: false
  }}
)
const SettingsNav = createStackNavigator(
  {
  
    MenuScreen: { screen: MenuScreen },
    ViewScreen: { screen: ViewScreen },
    HomeScreen: { screen: HomeScreen},
    
 
  }, { defaultNavigationOptions: {
    headerShown: false
  }}
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
    Settings: {
      screen: SettingsNav,
      navigationOptions: {
        title:"Menu",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-menu'} />
          </View>
        ),
     
       
      }
      
    }


  },
  {
    activeColor: '#F80B0B',
    inactiveColor: '#D1CCCC',
    barStyle: { backgroundColor: '#f7f7f7' },
    
  }
);


const Navigator = createAppContainer(TabNavigator);
export default class App extends React.Component{
  
  state = {
    isConnected: true
  }

  UNSAFE_componentWillMount(){
    enableScreens()
  }
  componentDidMount() {
    NetInfo.addEventListener(state => {
      
      this.handleConnectivityChange(state.isConnected) 
      
  
    });
   
  }
  handleConnectivityChange = isConnected => {
   
    this.setState({ isConnected: isConnected });
   
  }


  render() {
    return (
      <View style={{ flex: 1}}>
      
      {this.state.isConnected?<Navigator/>:<NoInternet />}

      </View>       

    )
   
  }
}





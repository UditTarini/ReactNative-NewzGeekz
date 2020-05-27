import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native'
import HeaderBar from './HeaderBar'



export default class NoInternet extends React.Component {
 
  
  render() {
    return (
      <View style={{flex:1}}>
      <HeaderBar height={60} fontSize={11} capFontSize={16}/>
      <View style={styles.noInternet}>
       
          
       
    <Image
    style={styles.TopicsIcon}
    source={require("../assets/no.png")}/>
  
  
       
        <Text style={styles.textStyle}>
            Whoops !!
          </Text>
        <Text style={styles.subTexStyle}>Looks like you are offline turn on your internet </Text>  
       
        </View>
        </View>
       )
    }
}


          
const styles = StyleSheet.create({
  TopicsIcon:{
    width: 100,
    height: 100,
    padding: 10,
    marginBottom: 10,
  },
  noInternet: {
    flex:1,  
    backgroundColor: 'rgba(52, 52, 52, 0)',
    margin:10,
    justifyContent: "center",
    alignItems: "center",
   
    
  },
  textStyle: {
    marginTop:10,
    fontWeight: "500",
    fontSize: 25,
    color:'#000'
  },
  subTexStyle: {
    fontSize: 14,
    fontWeight:"200",

    padding: 7,
    color: "grey",
    textAlign: 'center'
    
    
   }
})


 

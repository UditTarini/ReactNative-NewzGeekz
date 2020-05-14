import React, { useState } from 'react';
import { StyleSheet, Text,Linking,  Dimensions,StatusBar, AsyncStorage,TouchableOpacity, Image,ScrollView,FlatList, View, SafeAreaView } from 'react-native'
import { Card, CardItem, Icon, Right, Left} from 'native-base'
import HeaderBar from "../Utils/HeaderBar"
import * as Device from 'expo-device';

let Name = Device.modelName
let OSName = Device.osName
let OSVer = Device.osVersion
let OSID = Device.osBuildId
let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

export default class MenuScreen extends React.Component {
 
  
  appShare = () => {
    alert("app share")
  }  
  appRate = () => {
    alert("app rate")
  }  

  appFeedback = async () => {
   
    let to = 'udit.tarini937@gmail.com'
    let sub = `Feedback for NewzGeek App`
    let body = `Device Name: ${Name}  \n OS Name:${OSName} \n OS Version:${OSVer} \n OS Id: ${OSID} \n Screen Width:${screenWidth} \n ----------------------------------------------------- \n \n`
    let url = `mailto:${to}?subject=${sub}&body=${body}`
    return Linking.openURL(url);
  }  
  
  appLegal = (legal) => {
    const legalUrl= (legal == "tnc") ?
      ("https://www.websitepolicies.com/policies/view/PiltPncb") :
      ("https://www.websitepolicies.com/policies/view/CbtYePHh")
    this.props.navigation.navigate("ViewScreen",{url: legalUrl})
    
  }  
  
  
  render() {
   
    
    return (
        <View style={styles.container}>
        <StatusBar hidden />
        <HeaderBar height={65} fontSize={14} capFontSize={23} />
        
        <SafeAreaView >
         
        <Card transparent  >
      
        
          <CardItem >
          <TouchableOpacity onPress={() => {this.appShare() }} > 
          <Text style={styles.actionText}>Share this app</Text>
          </TouchableOpacity>
          </CardItem> 
          
          <CardItem  >
          <TouchableOpacity onPress={() => {this.appRate() }} > 
          <Text style={styles.actionText}>Rate this app</Text>
          </TouchableOpacity>
            </CardItem> 
          
            <CardItem  >
            <TouchableOpacity onPress={() => {this.appFeedback() }} > 
            <Text style={styles.actionText}>Feedback</Text>
            </TouchableOpacity>
            </CardItem> 

            <CardItem >
            <TouchableOpacity onPress={() => {this.appLegal() }} > 
            <Text style={styles.actionText}>Privacy policy</Text>
            </TouchableOpacity>
            </CardItem> 

            
            <CardItem >
            <TouchableOpacity onPress={() => {this.appLegal() }} > 
            <Text style={[styles.actionText,]}>Terms and conditions</Text>
            </TouchableOpacity>
            </CardItem> 
          </Card>
          

        </SafeAreaView>
        </View>
      ) 
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        
  },
  actionContainer: {
    margin: 15,
    elevation: 5,
  
  },
 
  actionBar: {
    padding: 10,
   
    
  },
  actionText: {
    fontSize:15,
    fontWeight:"500",
    padding: 7,
    color:"black"
  },
 

})
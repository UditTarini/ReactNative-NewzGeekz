import React from 'react';
import { StyleSheet, Text,AsyncStorage,TouchableOpacity, Image,ScrollView,FlatList, View, SafeAreaView } from 'react-native'

export default class SettingsScreen extends React.Component {
  appShare = () => {
    alert("app share")
  }  
  appRate = () => {
    alert("app rate")
  }  
  appFeedback = () => {
    alert("app feedback")
  }  
  appTNC = () => {
    this.props.navigation.navigate("tncScreen")
    
  }  
  
  render() {    

      return (
 
        <SafeAreaView style={styles.container}>
         
          <TouchableOpacity
          style={styles.actionBar}
          onPress={() => {this.appShare() }} > 
              
          <Text style={styles.actionText}>Share this app</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.actionBar}
          onPress={() => {this.appRate() }} > 
       
         <Text style={styles.actionText}>Rate this app</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.actionBar}
          onPress={() => {this.appFeedback() }} > 
       
         <Text style={styles.actionText}>Feedback</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.actionBar}
          onPress={() => {this.appTNC() }} > 
       
         <Text style={styles.actionText}>Terms and conditions</Text>
       </TouchableOpacity>
       
        </SafeAreaView>
            
      ) 
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:"white"
        
  },
  actionContainer: {
    margin: 15,
    elevation: 5,
    backgroundColor: "white"
  },
 
  actionBar: {
    padding: 10,
    backgroundColor: "white",
    
  },
  actionText: {
    fontSize:15,
    fontWeight:"500",
    padding:7,
  }
})
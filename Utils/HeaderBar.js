import React, { useState } from 'react';
import { StyleSheet,Text, AsyncStorage,TouchableOpacity, Image,ScrollView,FlatList, View, SafeAreaView, NativeModules } from 'react-native'
import { Container, Header, Title, Button, Icon } from 'native-base';


export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.height = props.height;
    this.fontSize = props.fontSize;
    this.capFontSize = props.capFontSize;

   
  }
  
  render() {
    return (
          
     
          <View style={[styles.header, {height:this.height}]}>
       
          
            <Text style={[styles.headerText,{fontSize:this.fontSize}]}>
              <Text style={{color:"#F80B0B",fontSize:this.capFontSize}}>N</Text>
              <Text>EWZ</Text>
              <Text style={{color:"#F80B0B",fontSize:this.capFontSize}}>G</Text>
              <Text>EEKZ</Text> 
              <Text>{this.backgroundColor}</Text>
            </Text>
          
            </View>
       )
    }
}


const styles = StyleSheet.create({
   header: {
       
    top:0,
    left:0,
    right:0,
    backgroundColor:"#fff",
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center",
  
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    },
    headerText: {
        
      fontWeight:"bold",
    }
})
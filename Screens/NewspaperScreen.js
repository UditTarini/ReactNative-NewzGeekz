import React from 'react';
import { StyleSheet, Text,TouchableOpacity, Image,ScrollView,FlatList, View, SafeAreaView, NativeModules } from 'react-native';





export default class NewspaperScreen extends React.Component {
 
      return (

            
        
        <SafeAreaView style={styles.container}>

        <View>
        <Text style={styles.TextStyle}>Newspapers</Text>
        </View>
        
        <TouchableOpacity
              style={styles.TopicsButton}
              onPress={ () => { this.setCatagory("The Hindu") }}  > 
                <Image 
                  style={styles.TopicsIcon}
                  source={require("../assets/TH.jpg")}/>
                 
                <Text style={styles.TopicsButtontext}>The Hindu</Text>
              </TouchableOpacity>
              </SafeAreaView>
              
              )
      
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      
    },
    TopicsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      
    },
    TopicsButton: {
      alignItems: "center",
      justifyContent: "center",
      margin:3,
      height: 110,
      borderColor: "#c1c1c1",
      borderWidth: 1,
      borderRadius: 5,
      width: "31.33%",
      shadowOffset:{width: 2,height: 2},
      elevation: 2,
      shadowColor: 'black',
      shadowOpacity: 0.2,

    },
    screenview: {
      flex: 1
    },
    TopicsButtontext: {
      color: "#000",
      fontSize: 13,
      
    },
    TopicsIcon:{
      width: 50,
      height: 50,
      padding: 10,
      marginBottom: 10,
    },
    TextStyle:{
       fontSize:20,
       fontWeight:"500",
       padding:7,
      
    }
})
 
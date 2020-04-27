import React from 'react';
import { StyleSheet, Text,TouchableOpacity, Image,ScrollView,FlatList, View, SafeAreaView, NativeModules } from 'react-native';





export default class NewspaperScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        source:" "
     }
  }
  setSource = async (source)=> {
      
    await this.setState({source})
    
    this.props.navigation.navigate("NewzGeekz",{source:this.state.source})
  }
  
  
  
    render() {
      
         const topics = new Array();
         topics[0] = new Array("The Hindu", require("../assets/NewsIcons/TH,jpg"));
         topics[1] = new Array("Times Of India", require("../assets/NewsIcons/TOI.png"));
         topics[2] = new Array("The Indian Express", require("../assets/NewsIcons/IndExp.jpg"));
         topics[3] = new Array("News18", require("../assets/NewsIcons/News18.jpg"));
         topics[4] = new Array("The Quint", require("../assets/NewsIcons/quint.png"));
         topics[5] = new Array("The Hindustan Times", require("../assets/NewsIcons/HT.jpg"));
         
         topics[6] = new Array("Al Jazeera", require("../assets/NewsIcons/Alzazeera.png"));
         topics[7] = new Array("BBC", require("../assets/NewsIcons/BBCE.png"));
         topics[8] = new Array("New York Tmes", require("../assets/NewsIcons/NYT.png"));
         topics[9] = new Array("Wall Street Journal", require("../assets/NewsIcons/WSJ.jpg"));
         topics[10] = new Array("BuzzFeed", require("../assets/NewsIcons/BuzzFeed.png"));
         
         topics[11] = new Array("Tech Chrunch", require("../assets/NewsIcons/TechChrunch.png"));
         topics[12] = new Array("The Verge", require("../assets/NewsIcons/TheVerge.png"));
         topics[13] = new Array("GSM Arena", require("../assets/NewsIcons/Gsm.png"));
         topics[14] = new Array("Wired", require("../assets/NewsIcons/wired.png"));
         topics[15] = new Array("The Next Web", require("../assets/NewsIcons/TNW.png"));
         
         topics[16] = new Array("Bloomberge", require("../assets/NewsIcons/bloom.png"));
         topics[17] = new Array("Money Control", require("../assets/NewsIcons/moneycontrol.jpg"));
         topics[18] = new Array("The Economic Times", require("../assets/NewsIcons/ET.jpg"));
        
      
        topics
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
 
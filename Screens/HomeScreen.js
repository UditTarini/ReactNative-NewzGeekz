import React from 'react';
import { StyleSheet,Text,StatusBar,TouchableOpacity, Image,ScrollView, View, SafeAreaView,  } from 'react-native'
import HeaderBar from "../Utils/HeaderBar"

import {AdMobBanner} from 'expo-ads-admob';
import {ad}  from "../Config/secrets";


export default class HomeScreen extends React.Component {
  AdUnitID = ad.AD_UNIT_ID01
 
  
  constructor(props) {
    super(props)
    this.state = {
      catagory: " ",
    
    }
  }

  

  setCatagory = async (cat) => {
      
    await this.setState({ catagory: cat })
      
    this.props.navigation.navigate("NewzScreen", { query: this.state.catagory })
 
  }
 

    render()
    {
      
      const topics = new Array();
      topics[0] = new Array("Top Headlines", require("../assets/TopicsIcons/trending.png"));
      topics[1] = new Array("International", require("../assets/TopicsIcons/businessman.png"));
      topics[2] = new Array("Technology", require("../assets/TopicsIcons/automation.png"));
      topics[3] = new Array("Business", require("../assets/TopicsIcons/teamwork.png"));
      topics[4] = new Array("Sports", require("../assets/TopicsIcons/soccer.png"));
      topics[5] = new Array("Science", require("../assets/TopicsIcons/molecule.png"));
      topics[6] = new Array("Entertainment", require("../assets/TopicsIcons/theater.png"));
      topics[7] = new Array("Fashion", require("../assets/TopicsIcons/designers.png"));
      topics[8] = new Array("Travel", require("../assets/TopicsIcons/globe.png"));
      topics[9] = new Array("Lifestyle", require("../assets/TopicsIcons/healthy.png"));
    
      
      
      const topicsArr = []
      
      for (let i = 0; i < topics.length; i++) {
        
        topicsArr.push(
          <TouchableOpacity
            key={i}
            style={styles.TopicsButton}
            onPress={() => { this.setCatagory(topics[i][0]) }}  >
            <Image
              style={styles.TopicsIcon}
              source={topics[i][1]} />
                 
            <Text style={[styles.TopicsButtontext,
            ]}>{topics[i][0]}</Text>
          </TouchableOpacity>)
      }
        
    
           
      return (
        <View style={styles.container}>
        <StatusBar hidden />
         
        
      
        <HeaderBar height={60} fontSize={11} capFontSize={16}/>
        
        <ScrollView >
        
          <View>
            <Text style={styles.TextStyle}>Topics</Text>
          </View>
            
          <SafeAreaView style={styles.TopicsContainer}>
            
            {topicsArr}
         
          </SafeAreaView>
      
          <AdMobBanner
          bannerSize="smartBannerLandscape"
          adUnitID={this.AdUnitID}
          servePersonalizedAds={true}
         />
         
          </ScrollView>
          
         
        </View> 
      )
                
      
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:"white"        
      },
    

    TopicsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        
      },
      TopicsButton: {
        alignItems: "center",
        justifyContent: "center",
        margin:3,
        height: 130,
        borderColor: "#c1c1c1",
        borderWidth: 1,
        borderRadius: 5,
        width: "31.33%",
              

      },
      screenview: {
        flex: 1
      },
      TopicsButtontext: {
        color: "#000",
        fontSize: 12,
        
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
         padding: 7,
     
        
      }
})
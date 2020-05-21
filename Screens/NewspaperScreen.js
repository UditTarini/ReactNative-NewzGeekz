import React from 'react';
import { StyleSheet,StatusBar, TouchableOpacity,Text, Image,ScrollView,View, SafeAreaView } from 'react-native';
import HeaderBar from "../Utils/HeaderBar"
import {AdMobBanner} from 'expo-ads-admob';
import {ad}  from "../Config/secrets";





export default class NewspaperScreen extends React.Component {

  AdUnitID = ad.AD_UNIT_ID02

  constructor(props){
    super(props)
    this.state={
      source: "",
    
     }
  }


  setSource = async (source) => {
      
    await this.setState({source:source})
   
    this.props.navigation.navigate("NewzScreen",{query:this.state.source})
    }
  
  render() {
      
    const newspaper = new Array();
    
    newspaper[0] = new Array("The Hindu","the-hindu", require("../assets/NewsIcons/TH.png"),"NA");
    newspaper[1] = new Array("Times of India","the-times-of-india", require("../assets/NewsIcons/TOI.png"),"NA");
    newspaper[2] = new Array("Indian Express", "indianexpress.com", require("../assets/NewsIcons/IndExp.png"),"NA");
    newspaper[3] = new Array("News18","news18.com", require("../assets/NewsIcons/News18.jpg"),"NA");
    newspaper[4] = new Array("Asian Age", "asianage.com", require("../assets/NewsIcons/TAA.jpeg"),"NA");
    newspaper[5] = new Array("Hindustan Times","hindustantimes.com", require("../assets/NewsIcons/HT.jpg"),"NA");
         
  
    newspaper[6] = new Array("AL Jazeera","al-jazeera-english", require("../assets/NewsIcons/Aljazeera.jpg"),"IN");
    newspaper[7] = new Array("BBC","bbc-news", require("../assets/NewsIcons/BBC.png"),"IN");
    newspaper[8] = new Array("Reuters","reuters", require("../assets/NewsIcons/reuters.jpg"),"IN");
    newspaper[9] = new Array("Wall Street Journal","the-wall-street-journal", require("../assets/NewsIcons/WSJ.png"),"IN");
    newspaper[10] = new Array("Buzzfeed","buzzfeed", require("../assets/NewsIcons/BuzzFeed.png"),"IN");
         
   
    newspaper[11] = new Array("Techcrunch","techcrunch", require("../assets/NewsIcons/TechCrunch.png"),"TC");
    newspaper[12] = new Array("The Verge","the-verge", require("../assets/NewsIcons/TheVerge.png"),"TC");
    newspaper[13] = new Array("GSM Arena","gsmarena.com", require("../assets/NewsIcons/Gsm.png"),"TC");
    newspaper[14] = new Array("Wired","wired.com", require("../assets/NewsIcons/wired.png"),"TC");
    newspaper[15] = new Array("The Next Web","the-next-web", require("../assets/NewsIcons/TNW.png"),"TC");
         
   
    newspaper[16] = new Array("Bloomberg","bloomberg", require("../assets/NewsIcons/bloom.png"),"FC");
    newspaper[17] = new Array("Business Insider","business-insider", require("../assets/NewsIcons/bi.jpg"),"FC");
    newspaper[18] = new Array("CNBC", "cnbc", require("../assets/NewsIcons/cnbc.jpg"),"FC");
        
      
    const NationalArr = []
    const InternationalArr = []
    const TechArr = []
    const FinanceArr = []
    

      
    for (let i = 0; i < newspaper.length; i++) {
      
      
      switch (newspaper[i][3]) {
        case "NA":
          NationalArr.push(
                
            <TouchableOpacity
            
              key={ Date.now() }
              style={styles.newspaperButton}
              onPress={() => { this.setSource(newspaper[i][1]) }}  >
              <Image
                style={styles.newspaperIcon}
                source={newspaper[i][2]} />
                        
              <Text
                style={styles.newspaperButtontext }>
                {newspaper[i][0]}</Text>
            </TouchableOpacity>)
          break
        case "IN":
          InternationalArr.push(
                
            <TouchableOpacity
              key={ Date.now() }
              style={styles.newspaperButton}
              onPress={() => { this.setSource(newspaper[i][1]) }}  >
              <Image
                style={styles.newspaperIcon}
                source={newspaper[i][2]} />
                        
              <Text style={styles.newspaperButtontext}>
                {newspaper[i][0]}</Text>
            </TouchableOpacity>)
          break
        case "TC":
          TechArr.push(
                
            <TouchableOpacity
              key={ Date.now() }
              style={styles.newspaperButton}
              onPress={() => { this.setSource(newspaper[i][1]) }}  >
              <Image
                style={styles.newspaperIcon}
                source={newspaper[i][2]} />
                        
              <Text style={styles.newspaperButtontext}>{newspaper[i][0]}</Text>
            </TouchableOpacity>)
          break
        case "FC":
          FinanceArr.push(
                
            <TouchableOpacity
              key={ Date.now() }
              style={styles.newspaperButton}
              onPress={() => { this.setSource(newspaper[i][1]) }}  >
              <Image
                style={styles.newspaperIcon}
                source={newspaper[i][2]} />
                        
              <Text
                style={styles.newspaperButtontext }>
                {newspaper[i][0]}
              </Text>
            </TouchableOpacity>
          )
          break
         
      
      }
    }
  
  
               
          
    return (
      <View style={styles.container}>
             <StatusBar hidden />
             <HeaderBar height={60} fontSize={11} capFontSize={16}/>

             <ScrollView >
               
                
               <View>
                 <Text
                   style={styles.TextStyle}>
                   Newspaper</Text>
               </View>

               <Text style={styles.subTexStyle} >Indian</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {NationalArr}
            
               </SafeAreaView>
               
               <Text style={styles.subTexStyle} >International</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {InternationalArr}
            
               </SafeAreaView>
               
               <Text style={styles.subTexStyle} >Tech</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {TechArr}
            
               </SafeAreaView>
               
               <Text style={styles.subTexStyle} >Finance</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {FinanceArr}
            
               </SafeAreaView>
         
               <AdMobBanner
               bannerSize="fullBanner"
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
           backgroundColor:"white",
           
           
         },
       
   
       newspaperContainer: {
           flexDirection: "row",
           flexWrap: "wrap",
           
         },
         newspaperButton: {
           alignItems: "center",
           justifyContent: "center",
           margin:3,
           height: 130,
           borderColor: "#c1c1c1",
           borderWidth: 1,
           borderRadius: 5,
           width: "31.33%",
           shadowOffset:{width: 2,height: 2},
         
           backgroundColor:"white",
           shadowOpacity: 0.2,
   
         },
         screenview: {
           flex: 1
         },
         newspaperButtontext: {
           paddingHorizontal:15,
           fontSize: 12,
           
         },
         newspaperIcon:{
           width: 80,
           height: 50,
           padding: 5,
           marginBottom: 10,
         },
         TextStyle:{
            fontSize:20,
            fontWeight:"500",
            padding: 7,
        },
        subTexStyle: {
          fontSize: 14,
          paddingLeft: 7,
          padding: 5,
          color:"grey"
         }
   })
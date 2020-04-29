import React from 'react';
import { StyleSheet, TouchableOpacity, Image,ScrollView,FlatList, View, SafeAreaView, NativeModules } from 'react-native';
import {Text} from 'native-base'
import { block } from 'react-native-reanimated';




export default class NewspaperScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        source:""
     }
  }

  
  setSource = async (source)=> {
      
    await this.setState({source:source})
    console.log(this.state.source)
    this.props.navigation.navigate("NewzScreen",{query:this.state.source})
    }
  
  render() {
      
    const newspaper = new Array();
    
    newspaper[0] = new Array("The Hindu","the-hindu", require("../assets/NewsIcons/TH.jpg"),"NA");
    newspaper[1] = new Array("Times of India","the-times-of-india", require("../assets/NewsIcons/TOI.png"),"NA");
    newspaper[2] = new Array("Indian Express", "indianexpress.com", require("../assets/NewsIcons/IndExp.png"),"NA");
    newspaper[3] = new Array("News18","news18.com", require("../assets/NewsIcons/News18.jpg"),"NA");
    newspaper[4] = new Array("Asian Age", "asianage.com", require("../assets/NewsIcons/TAA.jpeg"),"NA");
    newspaper[5] = new Array("Hindustan Times","hindustantimes.com", require("../assets/NewsIcons/HT.jpg"),"NA");
         
  
    newspaper[6] = new Array("AL Jazeera","al-jazeera-english", require("../assets/NewsIcons/Alzazeera.jpg"),"IN");
    newspaper[7] = new Array("BBC","bbc-news", require("../assets/NewsIcons/BBC.png"),"IN");
    newspaper[8] = new Array("Reuters","reuters", require("../assets/NewsIcons/reuters.png"),"IN");
    newspaper[9] = new Array("Wall Street Journal","the-wall-street-journal", require("../assets/NewsIcons/WSJ.jpg"),"IN");
    newspaper[10] = new Array("Buzzfeed","buzzfeed", require("../assets/NewsIcons/BuzzFeed.png"),"IN");
         
   
    newspaper[11] = new Array("Techcrunch","techcrunch", require("../assets/NewsIcons/TechCrunch.png"),"TC");
    newspaper[12] = new Array("The Verge","the-verge", require("../assets/NewsIcons/TheVerge.png"),"TC");
    newspaper[13] = new Array("Engadget","engadget", require("../assets/NewsIcons/Gsm.png"),"TC");
    newspaper[14] = new Array("Techradar","techradar", require("../assets/NewsIcons/wired.png"),"TC");
    newspaper[15] = new Array("The Next Web","the-next-web", require("../assets/NewsIcons/TNW.png"),"TC");
         
   
    newspaper[16] = new Array("Bloomberg","bloomberg", require("../assets/NewsIcons/bloom.png"),"FC");
    newspaper[17] = new Array("Business Insider","business-insider", require("../assets/NewsIcons/moneycontrol.jpg"),"FC");
    newspaper[18] = new Array("CNN", "cnn", require("../assets/NewsIcons/ET.jpg"),"FC");
        
      
    const NationalArr = []
    const InternationalArr = []
    const TechArr = []
    const FinanceArr = []


      
    for (let i = 0; i < newspaper.length; i++) {
      
      
      switch (newspaper[i][3]) {
        case "NA":
          NationalArr.push(
                
            <TouchableOpacity
              style={styles.newspaperButton}
              onPress={() => { this.setSource(newspaper[i][1]) }}  >
              <Image
                style={styles.newspaperIcon}
                source={newspaper[i][2]} />
                        
              <Text style={styles.newspaperButtontext}>{newspaper[i][0]}</Text>
            </TouchableOpacity>)
          break
        case "IN":
          InternationalArr.push(
                
            <TouchableOpacity
              style={styles.newspaperButton}
              onPress={() => { this.setSource(newspaper[i][1]) }}  >
              <Image
                style={styles.newspaperIcon}
                source={newspaper[i][2]} />
                        
              <Text style={styles.newspaperButtontext}>{newspaper[i][0]}</Text>
            </TouchableOpacity>)
          break
        case "TC":
          TechArr.push(
                
            <TouchableOpacity
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
              style={styles.newspaperButton}
              onPress={() => { this.setSource(newspaper[i][1]) }}  >
              <Image
                style={styles.newspaperIcon}
                source={newspaper[i][2]} />
                        
              <Text style={styles.newspaperButtontext}>{newspaper[i][0]}</Text>
            </TouchableOpacity>)
          break
         
      
      }
    }
  
  
               
          
           return(
               <ScrollView style={styles.container}>
               
                
                <View>
                   <Text style={styles.TextStyle}>Newspaper</Text>
               </View>

               <Text style={{ fontSize: 14, paddingLeft: 7, padding: 5 }} note>National</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {NationalArr}
            
               </SafeAreaView>
               
               <Text style={{ fontSize: 14, paddingLeft: 7, padding: 5 }} note>International</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {InternationalArr}
            
               </SafeAreaView>
               
               <Text style={{ fontSize: 14, paddingLeft: 7, padding: 5 }} note>Tech</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {TechArr}
            
               </SafeAreaView>
               
               <Text style={{ fontSize: 14, paddingLeft: 7, padding: 5 }} note>Finance</Text>           
               
               <SafeAreaView style={styles.newspaperContainer}>
               
               {FinanceArr}
            
               </SafeAreaView>
         
                  </ScrollView>
           )
                   
         
       }
   }
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           backgroundColor: "white",
           
         },
       
   
       newspaperContainer: {
           flexDirection: "row",
           flexWrap: "wrap",
           
         },
         newspaperButton: {
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
         newspaperButtontext: {
           color: "#000",
           fontSize: 13,
           
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
            
           
         }
   })
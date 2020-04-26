import React from 'react';
import { StyleSheet, Text,TouchableOpacity, Image,ScrollView,FlatList, View, SafeAreaView, NativeModules } from 'react-native';
import { Container, Header,Title, Content,List, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';
import { render } from 'react-dom';


export default class HomeScreen extends React.Component{
    
    
    constructor(props){
            super(props)
            this.state={
                catagory:" "
            }
    }

    setCatagory = async (cat)=> {
      
      await this.setState({catagory:cat})
      
      this.props.navigation.navigate("NewzGeekz",{catagory:this.state.catagory})
      }

    render(){
      
      const elements = new Array();
      elements[0] = new Array ( "Top Headlines", require("../assets/icons/trending.png") );
      elements[1] = new Array ( "International", require("../assets/icons/businessman.png") );
      elements[2] = new Array ( "Technology", require("../assets/icons/automation.png") );
      elements[3] = new Array ( "Business", require("../assets/icons/teamwork.png") );
      elements[4] = new Array ( "Sports", require("../assets/icons/soccer.png") );
      elements[5] = new Array ( "Science", require("../assets/icons/molecule.png") );
      elements[6] = new Array ( "Entertainment", require("../assets/icons/theater.png") );
      elements[7] = new Array ( "Fashion", require("../assets/icons/designers.png") );
      elements[8] = new Array ( "Travel", require("../assets/icons/globe.png") );
      elements[9] = new Array ( "Lifestyle", require("../assets/icons/healthy.png") );
    
      
      
     // const elements = ['General', 'Fashion', 'Travel'];
      
      const items = []
      
      for (let i=0; i<elements.length; i++ ) {
            
            items.push(
              <TouchableOpacity
              style={styles.TopicsButton}
              onPress={ () => { this.setCatagory(elements[i][0]) }}  > 
                <Image 
                  style={styles.TopicsIcon}
                  source={elements[i][1]}/>
                 
                <Text style={styles.TopicsButtontext}>{elements[i][0]}</Text>
              </TouchableOpacity>)
             }
            
       
        return(
            <ScrollView style={styles.container}>
            
             
             <View>
                <Text style={styles.TextStyle}>Topics</Text>
             </View>
            
            <SafeAreaView style={styles.TopicsContainer}>
            
            {items}
         
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
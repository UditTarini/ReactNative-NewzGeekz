import React from 'react';
import { Alert,StatusBar,TouchableOpacity , Dimensions ,ActivityIndicator,Text,Share,YellowBox,  Image, View, BackHandler} from 'react-native';
import {List, Card, CardItem,Icon, Left, Body, Right } from 'native-base';

import * as Speech from 'expo-speech';
import TimeAgo from '../Utils/time';

import HeaderBar from "../Utils/HeaderBar"


import { getArticles } from '../FetchData/NewsData';




YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class NewzScreen extends React.Component {   
 
      constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          data: null,
          playStatus: 'Play'
        }
       
      }  

    
      UNSAFE_componentWillMount() {
        const catagory = this.props.navigation.getParam("query", null);
      
        global.titles = []
        global.screenHeight = Math.round(Dimensions.get('window').height) - 80;
       
        getArticles(catagory).then(data => {
          
          for (let i = 0; i < data.length; i++){
            
            titles.push(data[i].title)
          }this.setState({
            isLoading: false,
            data: data,
            
          });
          
        }, error => {
          Alert.alert('Error', 'Something went wrong!');
        }
        )
      }

      componentDidMount() {
         
            Speech.isSpeakingAsync().then((data)=>data?Speech.stop():null)
    
       
      }
      
     
    


  playNews = () => {
    if(this.state.playStatus == "Play"){
      for(let i = 0; i < titles.length; i++)
       { 
        this.setState({playStatus: "Pause"})
        Speech.speak(titles[i], { pitch: 1, rate: 0.90 })
         
       }
     }
      else{
       Speech.stop()
       this.setState({playStatus: "Play" })
      }
  }
  
  

    
  
  render() {

    let playNewsView = this.state.isLoading ?(
      <View>
      
      </View>
    ): (
        
        <Card >
        <CardItem scrollEnabled={false}>
        <TouchableOpacity
          onPress={() => { this.playNews() }}>
          
          <Icon name={this.state.playStatus.toLowerCase()}
            style={{ fontSize: 23, color: 'red' }} />
        </TouchableOpacity>
   
        <Text >
                {this.state.playStatus} The News...</Text>
    
      </CardItem>
        
        </Card>
     
   
    
    )

    
    
    let view = this.state.isLoading ? (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#fff"}}>
        <ActivityIndicator
          color="#00f0ff"
          animating={this.state.isLoading}
          style={ {justifyContent: 'center', alignItems: 'center', marginTop: screenHeight }}
        />
        <Text style={{ marginTop: 10 }} children="Please Wait.." />
        
      
      </View>
     
    ) : (
        <View>
          <List
            key={Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}
            dataArray={this.state.data}
            renderRow={(item) => {
              return (
                <TouchableOpacity activeOpacity={0.7}
                    
                  onPress={() => {
                    Speech.stop()
                    this.props.navigation.navigate("ViewScreen", { url: item.url })
                  }} >
                  <Card >
                    <CardItem >
                      <Left>
                        <Body>
                          <Text style={{ color: '#000' }}
                            numberOfLines={2}>{item.title}</Text>
 
                        </Body>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => {
                          
                            let { url } = item;
                            let title = "via"
                            let message = `${title}\n\n Click To Know More\n ${url}\n\nShared via *NewzGeekz*  App`;
                            return Share.share(
                              { title, message, url: message },
                              { dialogTitle: `Share ${title}` }
                            )
                          }}  >
                          <Icon name="md-share"
                            style={{ color:'#000', fontSize: 18 }} />
                        </TouchableOpacity>
                      </Left>
                   
                    </CardItem>
                    <CardItem >
                      <Image source={{ uri: item.urlToImage != null ? item.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }}
                        style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                      <Left >
                        <Text style={{ fontSize: 12, color: "grey" }} >{item.source.name}</Text>
                      </Left>

                      <Right  >
                        <TimeAgo time={item.publishedAt} />
                      </Right>
                    </CardItem>
                  </Card>
                    
                </TouchableOpacity>
                
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={{height:screenHeight/14,backgroundColor:"white"}}></View>
         
          
        </View>
      )
     

    return (
      <View  style={{backgroundColor:"white"}}>
      <StatusBar hidden />
      <HeaderBar height={60} fontSize={11} capFontSize={16}/>
        {playNewsView}
        <View>
          {view}
          
        
        </View>
       
        </View>
    
      );
  }
}




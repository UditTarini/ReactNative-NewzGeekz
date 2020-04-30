import React from 'react';
import { StyleSheet,Alert,TouchableOpacity , Dimensions ,ActivityIndicator,  Image, View, SafeAreaView } from 'react-native';
import { Container, Header,List, Content, Card, CardItem, Thumbnail,Text,  Button, Icon, Left, Body, Right } from 'native-base';
import Tts from 'react-native-tts';
import * as Speech from 'expo-speech';
import TimeAgo from '../Components/time';

// import CardView from "../Components/CardView"
import { getArticles } from '../FetchData/NewsData';
import { ScrollView } from 'react-native-gesture-handler';


export default class NewzScreen extends React.Component {
  static navigationOptions = 
  ({ navigation }) => 
  ({ headerLeft: ()=>
    
    <Icon name={'md-arrow-back'}
     size={30} color='#ffffff' 
     style={{paddingLeft: 20}} 
     onPress={ () => { navigation.goBack() }} />,
      title: 'NewzGeekz', });

    
  
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
        console.log(screenHeight)
        getArticles(catagory).then(data => {
          
          for (let i = 0; i < data.length; i++){
            // console.log(data[i].title)
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
    
    let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop: screenHeight/2 }}>
        <ActivityIndicator
          animating={this.state.isLoading}
          style = {styles.activityIndicator}
          />
          <Text style={{marginTop: 10}} children="Please Wait.." />
        </View>
    ) : (
     <View style={styles.Container}>
      <Card >
        <CardItem >
          <TouchableOpacity
            onPress={() => { this.playNews() }}>
                
          <Icon active name={this.state.playStatus.toLowerCase()}
                style={{fontSize: 23, color: 'red'}}/>
          </TouchableOpacity>
         
          <Text>{this.state.playStatus} Your News...</Text>
          
         </CardItem>
       </Card>
   
        
        <List
          dataArray={this.state.data}
          renderRow={(item) => { 
            return (
              <TouchableOpacity activeOpacity={0.7}
                     onPress={() => {
                     Speech.stop() 
                     this.props.navigation.navigate("ViewScreen",{url: item.url}); 
                    }} >
                   <Card>
                    <CardItem >
                      <Left>
                        <Body>
                          <Text numberOfLines={2}>{item.title}</Text>
 
                        </Body>
                        </Left>
                  </CardItem>
                     <CardItem cardBody>
                      <Image source={{ uri: item.urlToImage != null ? item.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }}
                        style={{height: 200, width: null, flex: 1}}/>
                   </CardItem>
                     <CardItem>
                    <Left >
                        <Text style={{fontSize:12}} note>{item.source.name}</Text>
                    </Left>

                    <Right  >
                        <TimeAgo  time={item.publishedAt}/>
                    </Right>
                  </CardItem>
                   </Card>
               </TouchableOpacity>
                 
                  )
          }}
          keyExtractor={(item, index) => index.toString()} />
          </View>
          )
     

    return (  
       
        <SafeAreaView >
        
          {view}
        </SafeAreaView>
      
     
    
      );
  }
}

const styles = StyleSheet.create({
  Container: {
   
    backgroundColor: "white",
    
  },
 
  playNews: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "black",
    elevation:2
    
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    color:"#00f0ff" 
  }

})
  

